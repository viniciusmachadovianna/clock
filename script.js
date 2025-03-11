const $=(el)=>document.getElementById(el),
    pomodoro = $('pomodoro'),
    timer = $('timer'),
    alarm = $('alarm'),
    stopwatch = $('stopwatch'),
    tabs = document.querySelectorAll('li'),
    sections = document.querySelectorAll('section');

tabs.forEach(tab=>{tab.addEventListener('click',()=>{changeTab(tab)})});

function changeTab(activeTab) {
    tabs.forEach(tab=>{tab.classList.remove('active')});
    sections.forEach(section=>{section.classList.remove('active')});
    activeTab.classList.add('active');
    console.log(activeTab.id);
    
    document.querySelector(`.${activeTab.id}`).classList.add('active');
}