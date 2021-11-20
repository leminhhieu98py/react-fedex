function handleToggleSidebar(){
    let ToggleBtn = document.getElementById("navbar-toggle-btn");
    let SideBar = document.getElementById("sidebar-wrapper");
    let ContentContainer = document.getElementById("content-wrapper");
    let SideBarWidth = SideBar.offsetWidth;
    let ContentMarginLeft;
    ToggleBtn.addEventListener("click", function(){
        console.log(SideBarWidth);
        if(SideBarWidth == 250){
            SideBarWidth = 80;
            ContentMarginLeft = 100;
        }else{
            SideBarWidth = 250;
            ContentMarginLeft = 270;
        }
        SideBar.style.width = `${SideBarWidth}px`;
        ContentContainer.style.marginLeft = `${ContentMarginLeft}px`;
    })
}

document.addEventListener("DOMContentLoaded", function(event) { 
    handleToggleSidebar();
});