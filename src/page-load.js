/* on window load, creates a header
   image, and some content about the 
   restaurant and adds it to the content div
*/

const createAboutSection = () => {
  let div = document.getElementById('tab1-content');
  let contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  let header = document.createElement("h1");
  header.textContent = "THE OATMEAL BAR";

  let image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1475855664010-a869729f42c3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ba6eb86312aa956759e93c3df63b21bb";

  let text = document.createElement("p");
  text.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";
 
  div.appendChild(contentDiv);
  contentDiv.appendChild(header);
  contentDiv.appendChild(image);
  contentDiv.appendChild(text);
  console.log('hello!!');
}

const createMenuSection = () => {
  let div = document.getElementById('tab2-content');
  let contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  let header = document.createElement("h2");
  header.textContent = "MENU";

  let pageDiv = document.createElement('div');
  pageDiv.className = 'page';

  let menuSection = document.createElement('div');
  menuSection.className = 'menu-section';

  div.appendChild(contentDiv);
  contentDiv.appendChild(header);
  contentDiv.appendChild(pageDiv);
  pageDiv.appendChild(menuSection);

  let menuItems = ['Peanut Butter Banana Oatmeal', 'Berry Good Bowl', 'Classic PB&J'];
  let menuPrices = ['$4.50', '$5.00', '$3.00'];
  let menuDescriptions = ['We start with a generous portion of our organic oats,' +  
                      'a dusting of cinnamon, a big dollop of the peanut butter' + 
                      'of your choice, and of course sliced bananas on top!',
                      'Berries are a great source of antioxcidants, so why not' +
                      'start your day with a bowl of our organic oats and' +
                      'your choice of 3 types of berries (among blueberries,'+
                      'raspberries, strawberries, blackberries, goji berries...)',
                      'This one is pretty simple: your classic peanut butter and' +
                      'jelly in a bowl of oats! Choose among our various nut butters' +
                      'and homemade jams/jellies!']

  for( let i = 0; i < menuItems.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    let menuItemName = document.createElement('div');
    menuItemName.className = 'menu-item-name';
    menuItemName.textContent = menuItems[i];

    let menuItemPrice = document.createElement('div');
    menuItemPrice.className = 'menu-item-price';
    menuItemPrice.textContent = menuPrices[i];

    let menuItemDesc = document.createElement('div');
    menuItemDesc.className = 'menu-item-description';
    menuItemDesc.textContent = menuDescriptions[i];

    menuSection.appendChild(menuItem);
    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemDesc);
  }

}

const createTabs = () => {
  [1,2,3].forEach(function(idx) {
    let divTabs = document.getElementById('nav-div');
    let input = document.createElement('input');
    if(idx == 1) {
      input.checked = "checked";
    }
    input.id = 'tab' + idx;
    input.type = 'radio';
    input.name = 'pct';
  
    divTabs.appendChild(input);
  })

}

const createTabLabels = () => {
  let divTabs = document.getElementById('nav-div');
  let nav = document.createElement('nav');

  ['OUR STORY', 'MENU', 'GALLERY'].forEach(function(label, idx) {
    let navList = document.createElement('ul');
    navList.id = 'nav-list';
    let item = document.createElement('li');
    item.className = 'tab' + (idx + 1);
  
    
    let tabLabel = document.createElement('label');
    tabLabel.htmlFor = item.className;
    tabLabel.innerHTML = label;
  
    divTabs.appendChild(nav);
    nav.appendChild(navList);
    navList.appendChild(item);
    item.appendChild(tabLabel);
  })

}

const createContentContainers = () => {
  let divTabs = document.getElementById('nav-div');
  let contentSection = document.createElement('section');
  contentSection.id = 'content-section';
  divTabs.appendChild(contentSection);

  [1,2,3].forEach(function(idx) {
    let div = document.createElement('div');
    div.className = 'tab' + idx;
    div.id = 'tab' + idx + '-content';
    contentSection.appendChild(div);
  })
}



export  { createAboutSection, 
          createTabs, 
          createTabLabels, 
          createContentContainers, 
          createMenuSection }