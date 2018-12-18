(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='dist',b(b.s=11)})([function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(1);let e=class{constructor(a=d.g('date'),b=d.g('quantity'),c=d.g('value')){Object.assign(this,{_quantity:b,_value:c}),this._date=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantity*this._value}get date(){return this._date}get quantity(){return this._quantity}get value(){return this._value}equals(a){return JSON.stringify(this)==JSON.stringify(a)}}},function(a,b,c){'use strict';var d=c(16);c.d(b,'a',function(){return d.a});var e=c(6),f=c(17);c.d(b,'f',function(){return f.a});var g=c(2);c.d(b,'e',function(){return g.b});var h=c(8),i=c(5),j=c(18);c.d(b,'d',function(){return j.a});var k=c(19);c.d(b,'c',function(){return k.a});var l=c(20);c.d(b,'g',function(){return l.a});var m=c(21);c.d(b,'b',function(){return m.a})},function(a,b,c){'use strict';function d(a){return a instanceof f||Object.getPrototypeOf(a)instanceof f}c.d(b,'a',function(){return e}),b.b=function(a){return d(a)?a.message:(console.log(a),'It was impossible to do the operation.')};let e=class extends Error{constructor(a=''){super(a),this.name=this.constructor.name}};const f=e},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(a){this._element=document.querySelector(a)}update(a){this._element.innerHTML=this.template(a)}template(){throw new Error('You must implement the method template.')}}},function(a,b,c){'use strict';var d=c(0);c.d(b,'a',function(){return d.a});var e=c(7),f=c(22);c.d(b,'b',function(){return f.a});var g=c(23);c.d(b,'c',function(){return g.a})},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._isFunction(b[e])&&c.includes(e)?function(){console.log(`"${e}" triggered the trap.`),b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _isFunction(a){return typeof a==typeof Function}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});const d=['tradings'];let f=null,g=null,e=class a{constructor(){throw new Error('N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe')}static getConnection(){return new Promise((b,c)=>{if(f)return b(f);const d=indexedDB.open('jscangaceiro',4);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{f=a.target.result,g=f.close.bind(f),f.close=()=>{throw new Error('You can not close directly the connection.')},b(f)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static _createStores(a){d.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){f&&g()}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(0);let e=class{constructor(a){this._connection=a,this._store='tradings'}add(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],'readwrite').objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c('It was not possible to save the trading')}})}listAll(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],'readwrite').objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(e.value._date,e.value._quantity,e.value._value);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{console.log(a.target.error),b('It was not possible to list the tradings')}})}clearAll(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],'readwrite').objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b('It was not possible to delete the tradings')}})}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(10);let e=class{constructor(){throw new Error('This class can not be instantiated')}static toText(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static toDate(a){if(!/\d{2}\/\d{2}\/\d{4}/.test(a))throw new d.a;return new Date(...a.split('/').reverse().map((a,b)=>a-b%2))}}},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(2);let e=class extends d.a{constructor(){super('The date should be with the format dd/mm/aaaa.')}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(12),e=c.n(d),f=c(13),g=c.n(f),h=c(14),i=c.n(h),j=c(15),k=c(4);const l=new j.a,m=new k.a(new Date(),1,200),n=new Headers;n.set('Content-Type','application/json');const o=JSON.stringify(m);console.log(o);fetch('http://localhost:3000/tradings',{method:'POST',headers:n,body:o}).then(()=>console.log('Data has been sent successfully'))},function(){},function(){},function(){},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,('value'in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}c.d(b,'a',function(){return q});var f,g,h,i,j,k,l,m,n=c(4),o=c(24),p=c(1);let q=(f=p.c('#date','#quantity','#value'),g=p.b('submit','.form'),h=p.d(),i=p.b('click','#button-clear'),j=p.b('click','#button-import'),k=p.d(1500),f(l=(m=class{constructor(a,b,c){Object.assign(this,{_inputDate:a,_inputQuantity:b,_inputValue:c}),this._tradings=new p.a(new n.c(),new o.d('#tradings'),'add','clear'),this._message=new p.a(new o.b(),new o.c('#messageView'),'text'),this._service=new n.b,this._init()}_init(){var a=this;return d(function*(){try{const b=yield p.f(),c=yield b.listAll();c.forEach(function(b){return a._tradings.add(b)})}catch(b){a._message.text=p.e(b)}})()}add(a){var b=this;return d(function*(){try{console.log('teste'),a.preventDefault();const c=b._create(),d=yield p.f();yield d.add(c),b._tradings.add(c),b._message.text='Trading has been added successfully',b._cleanForm()}catch(a){b._message.text=p.e(a)}})()}_cleanForm(){this._inputDate.value='',this._inputQuantity.value=1,this._inputValue.value=0,this._inputDate.focus()}_create(){return new n.a(o.a.toDate(this._inputDate.value),parseInt(this._inputQuantity.value),parseFloat(this._inputValue.value))}clear(){var a=this;return d(function*(){try{const b=yield p.f();yield b.clearAll(),a._tradings.clear(),a._message.text='Tradings have been cleared successfully.'}catch(b){a._message.text=p.e(b)}})()}importTradings(){var a=this;return d(function*(){a._service.getTradingsFromThePeriod().then(function(b){b.filter(function(b){return!a._tradings.toArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._tradings.add(b)}),a._message.text='Tradings have been imported successfully'}).catch(function(b){return a._message.text=b})})()}},e(m.prototype,'add',[g,h],Object.getOwnPropertyDescriptor(m.prototype,'add'),m.prototype),e(m.prototype,'clear',[i],Object.getOwnPropertyDescriptor(m.prototype,'clear'),m.prototype),e(m.prototype,'importTradings',[j,k],Object.getOwnPropertyDescriptor(m.prototype,'importTradings'),m.prototype),m))||l)},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(5);let e=class{constructor(a,b,...c){const e=d.a.create(a,c,(a)=>{b.update(a)});return e}}},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}c.d(b,'a',function(){return g});var e=c(6),f=c(7);let g=(()=>{var a=d(function*(){let a=yield e.a.getConnection();return new f.a(a)});return function(){return a.apply(this,arguments)}})()},function(a,b){'use strict';b.a=function(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearTimeout(f),f=setTimeout(()=>e.apply(this,b),a)},d}}},function(a,b){'use strict';b.a=function(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){return new c(...b)};return d.prototype=c.prototype,d}}},function(a,b){'use strict';b.a=function(a){throw new Error(`${a} is a required parameter`)}},function(a,b,c){'use strict';b.a=function(a=d.g('event'),b=d.g('selector'),c=!0){return function(d,e,f){return Reflect.defineMetadata('bindEvent',{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}};var d=c(1)},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}c.d(b,'a',function(){return h});var e=c(8),f=c(0),g=c(2);let h=class{constructor(){this._http=new e.a}getTradingsOfTheWeek(){return this._http.get('http://localhost:3000/tradings/week').then((a)=>a.map((a)=>new f.a(new Date(a.date),a.quantity,a.value)),()=>{throw new g.a('It is not possible to get the current week tradings.')})}getTradingsOfTheLastWeek(){return this._http.get('http://localhost:3000/tradings/lastWeek').then((a)=>a.map((a)=>new f.a(new Date(a.date),a.quantity,a.value)),()=>{throw new g.a('It is not possible to get the last week tradings.')})}getTradingsOfTheWeekBeforeLast(){return this._http.get('http://localhost:3000/tradings/weekBeforeLast').then((a)=>a.map((a)=>new f.a(new Date(a.date),a.quantity,a.value)),()=>{throw new g.a('It is not possible to get the week before last tradings.')})}getTradingsFromThePeriod(){var a=this;return d(function*(){try{let b=yield Promise.all([a.getTradingsOfTheLastWeek(),a.getTradingsOfTheWeekBeforeLast()]);return b.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.date.getTime()-c.date.getTime()})}catch(a){throw console.log(a),new g.a('It is not possible to get the period tradings.')}})()}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(){this._tradings=[],Object.freeze(this)}add(a){this._tradings.push(a)}toArray(){return[].concat(this._tradings)}get volumeTotal(){return this._tradings.reduce((a,b)=>a+b.volume,0)}clear(){this._tradings.length=0}}},function(a,b,c){'use strict';var d=c(25);c.d(b,'c',function(){return d.a});var e=c(26);c.d(b,'d',function(){return e.a});var f=c(3),g=c(27);c.d(b,'b',function(){return g.a});var h=c(10),i=c(9);c.d(b,'a',function(){return i.a})},function(a,b,c){'use strict';c.d(b,'a',function(){return e});var d=c(3);let e=class extends d.a{template(a){return a.text?`<p class="alert alert-info">${a.text}</p>`:`<p></p>`}}},function(a,b,c){'use strict';c.d(b,'a',function(){return f});var d=c(3),e=c(9);let f=class extends d.a{template(a){return`
        <table class="table table-hover table-bordered">
            <thead>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </thead>

            <tbody>
                ${a.toArray().map((a)=>`
                    <tr>
                        <td>${e.a.toText(a.date)}</td>
                        <td>${a.quantity}</td>
                        <td>${a.value}</td>
                        <td>${a.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${a.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>`}}},function(a,b,c){'use strict';c.d(b,'a',function(){return d});let d=class{constructor(a=''){this._text=a}get text(){return this._text}set text(a){this._text=a}}}]);