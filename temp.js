// https://juejin.cn/post/6844903537365745672

// 阻止输入框失去焦点
// 当我们点击按钮的时候，文本框失焦，这是浏览器的默认事件。当你点击按钮的时候，会触发按钮的touchstart/mousedown事件，
// touchstart/mousedown事件的默认行为是使除了你点击的对象之外的有焦点的对象失去焦点。所以只要在touchstart/mousedown事件中阻止默认事件发生就可以了！

