// 获取容器元素
const container = document.getElementById('web_bg');

// 数字粒子类（粒子CSS将通过JS动态生成）
const particleClass = 'particle';

// 设置滚动数字的范围和粒子数量
const numParticles = 100; // 粒子数量
const scrollDuration = 5; // 每个粒子滚动的时间，单位秒
const specialNumbers = [7, 13, 22]; // 特别的数字，可以根据需要调整

// 创建粒子并将其添加到容器中
for (let i = 0; i < numParticles; i++) {
  // 创建粒子元素
  const particle = document.createElement('div');
  particle.classList.add(particleClass);
  
  // 随机生成粒子中的数字，或使用特殊数字
  const isSpecial = Math.random() < 0.1; // 10%概率使用特殊数字
  const particleNumber = isSpecial ? specialNumbers[Math.floor(Math.random() * specialNumbers.length)] : Math.floor(Math.random() * 100);
  
  // 设置粒子初始数字
  particle.textContent = particleNumber;
  
  // 添加到容器中
  container.appendChild(particle);
}

// 动态添加CSS样式
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  #particle-container {
    position: relative;
    width: 100%;
    height: 800px; /* 粒子容器的高度 */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .${particleClass} {
    position: absolute;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
    opacity: 0;
    animation: scrollAnimation ${scrollDuration}s linear infinite;
  }
  @keyframes scrollAnimation {
    0% {
      transform: translateY(100%);
      opacity: 1;
    }
    50% {
      opacity: 0.7;
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

// 设置每个粒子的初始位置和动画延时，确保滚动效果错落有致
const particles = document.querySelectorAll(`.${particleClass}`);
particles.forEach((particle, index) => {
  const delay = Math.random() * 2; // 随机延时，让粒子滚动时间不同
  particle.style.animationDelay = `${delay}s`;
  
  // 设置随机的位置（可以调整粒子的初始垂直位置）
    const randomLeft = Math.random() * 100;
    particle.style.left = `${randomLeft}%`;
    particle.style.top = `${Math.random() * 100}%`;
});
console.log(window.innerHeight);