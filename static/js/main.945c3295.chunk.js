(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2KCVa",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3fCu-"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__kebjp",Modal:"Modal_Modal__PJypE"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3k-73"}},16:function(e,t,a){e.exports={Button:"Button_Button__2drw_"}},21:function(e,t,a){},22:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(21),a(13)),i=a(4),l=a(5),u=a(7),m=a(6),h=(a(22),a(9)),d=(a(23),a(24),a(8)),g=a.n(d),b=a(1),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return h.b.error("Enter search query!");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:g.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:g.a.SearchForm__button,children:Object(b.jsx)("span",{className:g.a.SearchForm__buttonLabel,children:"Search"})}),Object(b.jsx)("input",{className:g.a.SearchForm__input,onChange:this.handleChange,value:this.state.query,name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),y=p,j=a(11),f=a.n(j);var _=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,o=e.onOpen,r=e.onGetImg;return Object(b.jsx)("li",{className:f.a.ImageGalleryItem,onClick:function(){return r(n,a)},children:Object(b.jsx)("img",{src:t,alt:a,className:f.a.ImageGalleryItem__image,showModal:o})})},v=a(14),O=a.n(v);var S=function(e){var t=e.images,a=e.showModal,n=e.onGetImg;return Object(b.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,o=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(b.jsx)(_,{webformatURL:o,tags:r,largeImageURL:c,onOpen:a,onGetImg:n},t)}))})},w=a(15),I=a.n(w),x=a(16),C=a.n(x);var k=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:C.a.Button,onClick:t,children:"Load more"})},M=a(12),L=a.n(M),G=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onCloseByClick=function(t){"DIV"===t.target.nodeName&&e.props.onClose()},e.onCloseByKedown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),window.addEventListener("click",this.onCloseByClick),window.addEventListener("keydown",this.onCloseByKedown)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("keydown",this.onCloseByKedown)}},{key:"render",value:function(){var e=this.props,t=e.onGetImg,a=e.onClose;return Object(r.createPortal)(Object(b.jsx)("div",{className:L.a.Overlay,onClose:a,children:Object(b.jsx)("div",{className:L.a.Modal,children:Object(b.jsx)("img",{src:t.img,alt:t.alt})})}),G)}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={mainURL:"https://pixabay.com/api/",secondaryURL:"&image_type=photo&orientation=horizontal&per_page=12",images:[],myKey:"24253422-4477825d93e6eb518eebc16ed",query:"",page:1,status:"idle",error:null,showModal:!1,modalImage:""},e.searchQuery=function(t){e.setState({query:t}),e.setState({page:1})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}));var t=e.state,a=t.mainURL,n=t.secondaryURL,o=t.query,r=t.page,c=t.myKey;fetch("".concat(a,"?q=").concat(o,"&page=").concat(r,"&key=").concat(c).concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Can not find ".concat(o,"!")))})).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),status:"resolved"}}))}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setImgModal=function(t,a){e.setState({modalImage:{img:t,alt:a}})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&e.toggleModal()}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.mainURL,r=n.secondaryURL,c=n.query,s=n.page,i=n.myKey;window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.query!==c&&(this.setState({status:"pending"}),setTimeout((function(){fetch("".concat(o,"?q=").concat(c,"&page=").concat(s,"&key=").concat(i).concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Can not find ".concat(c,"!")))})).then((function(e){a.setState({images:e.hits,page:s+1,status:"resolved"})}))}),1e3))}},{key:"render",value:function(){console.log(this.state.modalImage);var e=this.state,t=e.status,a=e.images,n=e.showModal,o=e.modalImage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{onSubmit:this.searchQuery}),Object(b.jsx)(h.a,{autoClose:3e3}),"resolved"===t&&Object(b.jsx)(S,{images:a,showModal:this.toggleModal,onGetImg:this.setImgModal}),"pending"===t&&Object(b.jsx)(I.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{margin:"0 50%"}}),0!==a.length&&Object(b.jsx)(k,{onClick:this.loadMore}),n&&Object(b.jsx)(F,{onClose:this.toggleModal,onGetImg:o})]})}}]),a}(n.Component),q=U;c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Y3Ue",SearchForm:"Searchbar_SearchForm__2opw8",SearchForm__button:"Searchbar_SearchForm__button__3Pexs",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__33FUl",SearchForm__input:"Searchbar_SearchForm__input__1rLiP"}}},[[46,1,2]]]);
//# sourceMappingURL=main.945c3295.chunk.js.map