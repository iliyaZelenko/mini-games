(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(n,t,e){"use strict";e.r(t);var s=e(5),c=e.n(s);let i,l,o=[];const r="click-container--wait",a="click-container--get-ready",u="click-container--click";var d=()=>{const n=document.querySelector(".click-container"),t=document.querySelector(".click-container__text");n.addEventListener("click",function(){var n,e;if(this.classList.contains(r)&&(this.classList.remove(r),this.classList.add(a),t.textContent="Приготовьтесь...",l=setTimeout(()=>{this.classList.remove(a),this.classList.add(u),t.textContent="Нажмите!",i=h()},(e=3e3,(n=700)+Math.round(Math.random()*(e-n))))),this.classList.contains(u)){const n=+(h()-i).toFixed(1);o.push(n),x(),this.classList.remove(u),this.classList.add(r),t.textContent="Нажмите чтобы начать.",this.click()}}),n.addEventListener("dblclick",function(){o=[],x(),this.classList.remove(a),this.classList.remove(u),!this.classList.contains(r)&&this.classList.add(r),t.textContent="Нажмите чтобы начать.",clearTimeout(l)})};function h(){return performance.now()}function x(){const n=+(o.length&&o.reduce((n,t)=>n+t)/o.length||0).toFixed(1);document.querySelector(".result-list__results").textContent=o.length&&o.join(", ")||"?",document.querySelector(".result-list__best-result").textContent=o.length&&Math.min(...o)||"?",document.querySelector(".result-list__worst-result").textContent=o.length&&Math.max(...o)||"?",document.querySelector(".result-list__average-result").textContent=o.length&&n||"?"}e.d(t,"default",function(){return c.a}),e.d(t,"script",function(){return d})},5:function(n,t){n.exports='<div class="click-container click-container--wait">\n  <div class="result-list">\n    Лучший результат:\n    <span class="result-list__best-result">\n      ?\n    </span>\n    <br>\n\n    Средний результат:\n    <span class="result-list__average-result">\n      ?\n    </span>\n    <br>\n\n    Последние результаты:\n    <span class="result-list__results">\n      ?\n    </span>\n    <br>\n\n    Худший результат:\n    <span class="result-list__worst-result">\n      ?\n    </span>\n  </div>\n\n  <span class="click-container__text">\n    Нажмите чтобы начать.\n  </span>\n\n  <div class="bottom-info">\n    Нажмите два раза чтобы обнулить результат.\n  </div>\n</div>\n\n\x3c!--<div class="click-container click-container&#45;&#45;get-ready">--\x3e\n  \x3c!--Приготовьтесь.--\x3e\n\x3c!--</div>--\x3e\n\n\x3c!--<div class="click-container click-container&#45;&#45;click">--\x3e\n  \x3c!--Нажимайте!--\x3e\n\x3c!--</div>--\x3e\n\n<style>\n  .click-container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2.5rem;\n    height: 100vh;\n    border: 1px solid lightgrey;\n    border-radius: 15px;\n  }\n\n  .click-container--wait {\n    background: aliceblue;\n    color: black;\n  }\n\n  .click-container--get-ready {\n    background: blue;\n    color: white;\n  }\n\n  .click-container--click {\n    background: red;\n    color: white;\n  }\n\n  .result-list {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    font-size: 1.5rem;\n  }\n\n  .bottom-info {\n    position: absolute;\n    bottom: 10px;\n    font-size: 1.5rem;\n    color: gray;\n  }\n/*\n  .click-container--hidden {\n    display: none;\n  }*/\n</style>\n'}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Rpb24vc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Rpb24vaW5kZXguaHRtbCJdLCJuYW1lcyI6WyJ0aW1lU3RhcnQiLCJ0aW1lb3V0IiwicmVzdWx0cyIsImNsYXNlcyIsInNjcmlwdCIsImNvbnRhaW5lckVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dEVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1pbiIsIm1heCIsInRoaXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInRleHRDb250ZW50Iiwic2V0VGltZW91dCIsImdldE5vdyIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInRpbWVEaWZmTXMiLCJ0b0ZpeGVkIiwicHVzaCIsInVwZGF0ZVJlc3VsdHMiLCJjbGljayIsImNsZWFyVGltZW91dCIsInBlcmZvcm1hbmNlIiwibm93IiwiYXZlcmFnZSIsImxlbmd0aCIsInJlZHVjZSIsInByZSIsImN1cnIiLCJqb2luIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImQiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwicmVhY3Rpb25fZGVmYXVsdCIsImEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoibUhBQUEsSUFBQUEsRUFFQUMsRUFEQUMsRUFBQSxHQUVBLE1BQUFDLEVBQ0Esd0JBREFBLEVBRUEsNkJBRkFBLEVBR0EseUJBR2UsSUFBQUMsRUFBQSxLQUNmLE1BQUFDLEVBQUFDLFNBQUFDLGNBQUEsb0JBQ0FDLEVBQUFGLFNBQUFDLGNBQUEsMEJBRUFGLEVBQUFJLGlCQUFBLG1CQTJDQSxJQUFBQyxFQUFBQyxFQTVCQSxHQWRBQyxLQUFBQyxVQUFBQyxTQUFBWCxLQUNBUyxLQUFBQyxVQUFBRSxPQUFBWixHQUNBUyxLQUFBQyxVQUFBRyxJQUFBYixHQUNBSyxFQUFBUyxZQUFBLG1CQUVBaEIsRUFBQWlCLFdBQUEsS0FDQU4sS0FBQUMsVUFBQUUsT0FBQVosR0FDQVMsS0FBQUMsVUFBQUcsSUFBQWIsR0FDQUssRUFBQVMsWUFBQSxXQUVBakIsRUFBQW1CLE1BZ0NBUixFQS9CTyxLQStCUEQsRUEvQk8sS0FnQ1BVLEtBQUFDLE1BQ0FELEtBQUFFLFVBQUFYLEVBQUFELE9BOUJBRSxLQUFBQyxVQUFBQyxTQUFBWCxHQUFBLENBQ0EsTUFDQW9CLElBREFKLElBQ0FuQixHQUFBd0IsUUFBQSxHQUVBdEIsRUFBQXVCLEtBQUFGLEdBQ0FHLElBRUFkLEtBQUFDLFVBQUFFLE9BQUFaLEdBQ0FTLEtBQUFDLFVBQUFHLElBQUFiLEdBQ0FLLEVBQUFTLFlBQUEsd0JBRUFMLEtBQUFlLFdBR0F0QixFQUFBSSxpQkFBQSxzQkFDQVAsRUFBQSxHQUNBd0IsSUFFQWQsS0FBQUMsVUFBQUUsT0FBQVosR0FDQVMsS0FBQUMsVUFBQUUsT0FBQVosSUFDQVMsS0FBQUMsVUFBQUMsU0FBQVgsSUFBQVMsS0FBQUMsVUFBQUcsSUFBQWIsR0FFQUssRUFBQVMsWUFBQSx3QkFFQVcsYUFBQTNCLE1BVUEsU0FBQWtCLElBRUEsT0FBQVUsWUFBQUMsTUFHQSxTQUFBSixJQUNBLE1BQUFLLElBQUE3QixFQUFBOEIsUUFBQTlCLEVBQUErQixPQUFBLENBQUFDLEVBQUFDLElBQUFELEVBQUFDLEdBQUFqQyxFQUFBOEIsUUFBQSxHQUFBUixRQUFBLEdBRUFsQixTQUFBQyxjQUFBLHlCQUFBVSxZQUFBZixFQUFBOEIsUUFBQTlCLEVBQUFrQyxLQUFBLFdBQ0E5QixTQUFBQyxjQUFBLDZCQUFBVSxZQUFBZixFQUFBOEIsUUFBQVosS0FBQVYsT0FBQVIsSUFBQSxJQUNBSSxTQUFBQyxjQUFBLDhCQUFBVSxZQUFBZixFQUFBOEIsUUFBQVosS0FBQVQsT0FBQVQsSUFBQSxJQUNBSSxTQUFBQyxjQUFBLGdDQUFBVSxZQUFBZixFQUFBOEIsUUFBQUQsR0FBQSxJQ3pFQU0sRUFBQUMsRUFBQUMsRUFBQSw0QkFBQUMsRUFBQUMsSUFBQUosRUFBQUMsRUFBQUMsRUFBQSwyQkFBQW5DLHFCQ0FBc0MsRUFBQUMsUUFBQSIsImZpbGUiOiJyZWFjdGlvbi1nYW1lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0aW1lU3RhcnRcbmxldCByZXN1bHRzID0gW11cbmxldCB0aW1lb3V0XG5jb25zdCBjbGFzZXMgPSB7XG4gIHdhaXQ6ICdjbGljay1jb250YWluZXItLXdhaXQnLFxuICBnZXRSZWFkeTogJ2NsaWNrLWNvbnRhaW5lci0tZ2V0LXJlYWR5JyxcbiAgY2xpY2s6ICdjbGljay1jb250YWluZXItLWNsaWNrJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWNrLWNvbnRhaW5lcicpXG4gIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGljay1jb250YWluZXJfX3RleHQnKVxuXG4gIGNvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzZXMud2FpdCkpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzZXMud2FpdClcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzZXMuZ2V0UmVhZHkpXG4gICAgICB0ZXh0RWwudGV4dENvbnRlbnQgPSAn0J/RgNC40LPQvtGC0L7QstGM0YLQtdGB0YwuLi4nXG5cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNlcy5nZXRSZWFkeSlcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNlcy5jbGljaylcbiAgICAgICAgdGV4dEVsLnRleHRDb250ZW50ID0gJ9Cd0LDQttC80LjRgtC1ISdcblxuICAgICAgICB0aW1lU3RhcnQgPSBnZXROb3coKVxuICAgICAgfSwgZ2V0UmFuZG9tKDcwMCwgMzAwMCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNlcy5jbGljaykpIHtcbiAgICAgIGNvbnN0IHRpbWVFbmQgPSBnZXROb3coKVxuICAgICAgY29uc3QgdGltZURpZmZNcyA9ICsodGltZUVuZCAtIHRpbWVTdGFydCkudG9GaXhlZCgxKVxuXG4gICAgICByZXN1bHRzLnB1c2godGltZURpZmZNcylcbiAgICAgIHVwZGF0ZVJlc3VsdHMoKVxuXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc2VzLmNsaWNrKVxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNlcy53YWl0KVxuICAgICAgdGV4dEVsLnRleHRDb250ZW50ID0gJ9Cd0LDQttC80LjRgtC1INGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMLidcbiAgICAgIC8vINC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvlxuICAgICAgdGhpcy5jbGljaygpXG4gICAgfVxuICB9KVxuICBjb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXN1bHRzID0gW11cbiAgICB1cGRhdGVSZXN1bHRzKClcblxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzZXMuZ2V0UmVhZHkpXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNlcy5jbGljaylcbiAgICAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc2VzLndhaXQpICYmIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzZXMud2FpdClcblxuICAgIHRleHRFbC50ZXh0Q29udGVudCA9ICfQndCw0LbQvNC40YLQtSDRh9GC0L7QsdGLINC90LDRh9Cw0YLRjC4nXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tIChtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yb3VuZChcbiAgICBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbilcbiAgKVxufVxuXG5mdW5jdGlvbiBnZXROb3cgKCkge1xuICAvLyBuZXcgRGF0ZSgpXG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVSZXN1bHRzICgpIHtcbiAgY29uc3QgYXZlcmFnZSA9ICsoKHJlc3VsdHMubGVuZ3RoICYmIHJlc3VsdHMucmVkdWNlKChwcmUsIGN1cnIpID0+IHByZSArIGN1cnIpIC8gcmVzdWx0cy5sZW5ndGgpIHx8IDApLnRvRml4ZWQoMSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LWxpc3RfX3Jlc3VsdHMnKS50ZXh0Q29udGVudCA9IChyZXN1bHRzLmxlbmd0aCAmJiByZXN1bHRzLmpvaW4oJywgJykpIHx8ICc/J1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LWxpc3RfX2Jlc3QtcmVzdWx0JykudGV4dENvbnRlbnQgPSAocmVzdWx0cy5sZW5ndGggJiYgTWF0aC5taW4oLi4ucmVzdWx0cykpIHx8ICc/J1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LWxpc3RfX3dvcnN0LXJlc3VsdCcpLnRleHRDb250ZW50ID0gKHJlc3VsdHMubGVuZ3RoICYmIE1hdGgubWF4KC4uLnJlc3VsdHMpKSB8fCAnPydcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1saXN0X19hdmVyYWdlLXJlc3VsdCcpLnRleHRDb250ZW50ID0gKHJlc3VsdHMubGVuZ3RoICYmIGF2ZXJhZ2UpIHx8ICc/J1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vaW5kZXguaHRtbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2NyaXB0IH0gZnJvbSAnLi9zY3JpcHQnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2xpY2stY29udGFpbmVyIGNsaWNrLWNvbnRhaW5lci0td2FpdFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyZXN1bHQtbGlzdFxcXCI+XFxuICAgINCb0YPRh9GI0LjQuSDRgNC10LfRg9C70YzRgtCw0YI6XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJyZXN1bHQtbGlzdF9fYmVzdC1yZXN1bHRcXFwiPlxcbiAgICAgID9cXG4gICAgPC9zcGFuPlxcbiAgICA8YnI+XFxuXFxuICAgINCh0YDQtdC00L3QuNC5INGA0LXQt9GD0LvRjNGC0LDRgjpcXG4gICAgPHNwYW4gY2xhc3M9XFxcInJlc3VsdC1saXN0X19hdmVyYWdlLXJlc3VsdFxcXCI+XFxuICAgICAgP1xcbiAgICA8L3NwYW4+XFxuICAgIDxicj5cXG5cXG4gICAg0J/QvtGB0LvQtdC00L3QuNC1INGA0LXQt9GD0LvRjNGC0LDRgtGLOlxcbiAgICA8c3BhbiBjbGFzcz1cXFwicmVzdWx0LWxpc3RfX3Jlc3VsdHNcXFwiPlxcbiAgICAgID9cXG4gICAgPC9zcGFuPlxcbiAgICA8YnI+XFxuXFxuICAgINCl0YPQtNGI0LjQuSDRgNC10LfRg9C70YzRgtCw0YI6XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJyZXN1bHQtbGlzdF9fd29yc3QtcmVzdWx0XFxcIj5cXG4gICAgICA/XFxuICAgIDwvc3Bhbj5cXG4gIDwvZGl2PlxcblxcbiAgPHNwYW4gY2xhc3M9XFxcImNsaWNrLWNvbnRhaW5lcl9fdGV4dFxcXCI+XFxuICAgINCd0LDQttC80LjRgtC1INGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMLlxcbiAgPC9zcGFuPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiYm90dG9tLWluZm9cXFwiPlxcbiAgICDQndCw0LbQvNC40YLQtSDQtNCy0LAg0YDQsNC30LAg0YfRgtC+0LHRiyDQvtCx0L3Rg9C70LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgi5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS08ZGl2IGNsYXNzPVxcXCJjbGljay1jb250YWluZXIgY2xpY2stY29udGFpbmVyJiM0NTsmIzQ1O2dldC1yZWFkeVxcXCI+LS0+XFxuICA8IS0t0J/RgNC40LPQvtGC0L7QstGM0YLQtdGB0YwuLS0+XFxuPCEtLTwvZGl2Pi0tPlxcblxcbjwhLS08ZGl2IGNsYXNzPVxcXCJjbGljay1jb250YWluZXIgY2xpY2stY29udGFpbmVyJiM0NTsmIzQ1O2NsaWNrXFxcIj4tLT5cXG4gIDwhLS3QndCw0LbQuNC80LDQudGC0LUhLS0+XFxuPCEtLTwvZGl2Pi0tPlxcblxcbjxzdHlsZT5cXG4gIC5jbGljay1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcblxcbiAgLmNsaWNrLWNvbnRhaW5lci0td2FpdCB7XFxuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLmNsaWNrLWNvbnRhaW5lci0tZ2V0LXJlYWR5IHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNsaWNrLWNvbnRhaW5lci0tY2xpY2sge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5yZXN1bHQtbGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5ib3R0b20taW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICB9XFxuLypcXG4gIC5jbGljay1jb250YWluZXItLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9Ki9cXG48L3N0eWxlPlxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=