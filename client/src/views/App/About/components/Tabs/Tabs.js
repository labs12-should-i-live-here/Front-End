
class MyLink {
  constructor(element) {
    
    this.element = element;
    
    this.data = this.element.dataset.tab;
    
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    this.tabItem = new TabItem(this.itemElement);;
    
    this.element.addEventListener('click', () => this.select())
  };

  select() {
   
    const links = document.querySelectorAll('.tabs-link');

    links.forEach(link => link.classList.remove('tabs-link-selected'));

    this.element.classList.add('tabs-link-selected');
   
    this.tabItem.select()
  }
}

class TabItem {
  constructor(element) {
    
    this.element = element;
  }

  select() {
    
    const items = document.querySelectorAll(".tabs-item");

    items.forEach(item => item.classList.remove("tabs-item-selected"))
   
    this.element.classList.add("tabs-item-selected");
  }
}

links = document.querySelectorAll(".tabs-link");
links.forEach(function(link){
  return new MyLink(link);
});


TweenMax.staggerFrom('.tabs-link', 2, {opacity:0, y:300, delay: 0.0}, 0.2)

TweenMax.from('.tabs-items', 4, {y:1000, delay: .5, ease:Bounce.easeOut});

