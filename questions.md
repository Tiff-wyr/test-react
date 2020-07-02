### react 问题

一、 react 生命周期  

react 生命周期分为三部分  
1、mounting（挂载） 阶段  
. construct  
. static getDerivedStateFromProps  
. componentWillMount (将要被废弃)
. render  
. componentDidMount  

2、updating（更新）阶段  
. static getDerivedStateFromProps / componentWillReceivedProps（将要被废弃）  
``` getDerivedStateFromProps ``` 这个生命周期函数会有两个参数 nextProps（组件接受到的新的 props） 和 prevState（组件当前的数据） 可以判断这两个变量中的值是否相等就可以判断是否接受到了新的 props 值，该函数必须返回一个对象作为setState 的 updater 去更新组件 返回 null 将不进行更新，该函数将会在初始化construct之后和每次组件更新时最先执行，（new prpos、 setState、 forceUpdate 都是因为造成了组件的更新所以触发了该函数）

``` componentWillReceivedProps ``` 函数只有在接受到新的 props 才会被执行，函数有一个参数 nextProps 利用 nextprops 和 this.props 进行比较可以判断是否获取到了新的 props ，为什么将该函数废弃掉？如果 state 里面的值和 props 有密切的关系，那么再该方法中判断了获取到了新的 props 再将其更新到 state 相应的字段上，那么就违背了 react 唯一数据源

. shouldComponentUpdate  
该函数返回布尔值，当返回 false 时将阻止render，返回 true 时正常执行。函数有两个参数 nextProps（新的props）和 nextState（新的 state）
. render  
. getSnapshotBeforeUpdate  
. componentDidUpdate  

3、Unmounting（卸载）阶段  
. componentWillUnmount  

二、 react 中key值得作用  
key的作用主要是为了高效的更新虚拟DOM
在diff算法中 key是为了在diff算法执行时更快的找到对应的节点，提高diff速度，如果key 值在旧的 dom 节点中存在则保留进一步去比较组件内部的属性做更新，如果key 值在旧的 dom 中没有就会做新增，对应的旧的 key 在新的 dom树中没有 就会被删除  
diff 的简单过程，1、会在 sameVnode 函数中对新旧节点的 key 和 sel 进行比较判断两个节点是否有可以比较的需要，换言之如果这两个值有一个不一样就不会对他们的子节点进行比较了直接将旧节点remove掉新节点 insert 进去。2、如果新旧节点有可比较的必要，就会在 patchVnode 方法中对接点进行更新，然后判断两个节点是否都有子节点，如果有进行 updateChildren 方法对子节点进行比较更新。3、在 updateChildren 中对 oldCh 和 newCh 进行头尾比较如果一方的startIndex 大于了 endIndex 就说明一方比较完成了 结束比较，如果设置了 key 还可以利用从 key 生成的oldKeyToIdx 对象中找到对应的 节点对象进行比较，所以设置了 key 可以更加高效的利用虚拟dom  

当一个组件的key发生改变 react 会重新构建这个组件而不是更新

三、 react 组件如何判断获取到了新的props？  
可以在 shouldComponentUpdate 中去判断 nextprops 和 this.props 如果发生了变化返回 true 执行 render 函数，没有发生变化的话返回 false 不去执行 render 函数，减少 DOM 的更新


react.StrictMode 严格模式会通过两次调用constructor和render函数来更好的检测不符合预期的生命周期函数，在生产环境下不会有这种情况产生  
下列函数会执行两次  

. 类组件的constructor,render和shouldComponentUpdate方法  
. 类组建的静态方法getDerivedStateFromProps  
. 函数组件方法体  
. 状态更新函数(setState的第一个参数)  

https://m.html.cn/qa/react/14367.html