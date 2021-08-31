const RENDER_TO_DOM = Symbol("render-to-dom");

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }
  get vdom(){
    return this.render().vdom
  }
  get vchildren(){
    return this.children.map(child => child.vdom)
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
 
  //如果不用方括号 RENDER_TO_DOM就不是指的symbol类型 而是普通函数名
  //这里用symbol是为了函数私有化
  [RENDER_TO_DOM](range) {
    this._range = range
    this.render()[RENDER_TO_DOM](range);
  }
  rerender(){
    let oldRange = this._range;

    let range = document.createRange()
    range.setStart(oldRange.startContainer,oldRange.startOffset)
    range.setEnd(oldRange.startContainer,oldRange.startOffset)
    this[RENDER_TO_DOM](range)

    oldRange.setStart(range.endContainer,range.endOffset)
    oldRange.deleteContents();
  }
  setState(newState){
    if(this.state === null || typeof this.state !== 'object'){
      this.state = newState
      this.rerender()
      return;
    }
    let merge = (oldState,newState)=>{
      for(let p in newState){
        // newState:{a:2}
        if(oldState[p] === null || typeof oldState[p] !== 'object'){
          oldState[p] = newState[p]
        }else{
          merge(oldState[p],newState[p])
        }
      }
 
    }
    merge(this.state,newState)
    this.rerender()
  }
}

class ElementWrapper extends Component{
  constructor(type) {
    super(type)
    this.root = document.createElement(type);
    this.type = type
  }
  // setAttribute(name, value) {
  //   if(name.match(/^on([\s\S]+)$/)){
  //     this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/,c=>c.toLowerCase()),value)
  //   }else{
  //     this.root[name] = value;
  //   }
  // }
  // appendChild(component) {
  //   let range = document.createRange();
  //   range.setStart(this.root,this.root.childNodes.length);
  //   range.setEnd(this.root, this.root.childNodes.length);
  //   component[RENDER_TO_DOM](range)
  // }
  get vdom(){
    return this
    // return{
    //   type:this.type,
    //   props:this.props,
    //   children:this.children.map(child => child.vdom)
    // }
  }
 
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}

class TextWrapper extends Component {
  constructor(content) {
    super(content)
    this.root = document.createTextNode(content);
    this.type = '#text'
  }
  get vdom(){
    return this
    // return{
    //   type:'#text',
    //   content:this.content
    // }
  }
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}
export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === "string") {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  }
  for (let item in attributes) {
    e.setAttribute(item, attributes[item]);
  }
  let insertChildren = (children) => {
    for (let child of children) {
      if(child === null) continue
      if (typeof child === "string") {
        child = new TextWrapper(child);
      }
      if (typeof child === "object" && child instanceof Array) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  };
  insertChildren(children);
  return e;
}
export function render(component, parentElement) {
  let range = document.createRange();
  range.setStart(parentElement, 0);
  range.setEnd(parentElement, parentElement.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}
