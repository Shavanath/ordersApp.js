
const myApp = {

    data: {
        item: {
            name: [],
            inputValue: []
        }
    },

    ajaxUrl: 'php/ajax.php',
    inputLogin: $('.login-input'),
    buttonUsername: $('.submit-login'),
    inputItem: $('.item-input'),
    buttonAdd: $('.add-item-button'),
    listContainer: $('.list'),
    tabClicked: $('.tab-clicked'),
    tabDisplay: $('.tab-display'),


    // init

    init: function () {
        this.showContentOnClick();
        this.addLogin();
        this.addItem();
        this.removeItem();
    },

    // functions

    showContentOnClick: function () {
        const self = this;
        this.tabClicked.on('click', function () {
            self.tabDisplay.toggleClass('active')
        })
    },

    ajaxPost: function () {
        const self = this;
        const username = self.inputLogin;
        // console.log(username);
        // $.ajax({
        //     type:'POST',
        //     url: self.ajaxUrl,
        //     data: 'username=',
        // })
    },

    addLogin: function () {
        console.log(this.inputLogin);;
        const self = this;
        this.buttonUsername.on('click', function () {
            const username = self.inputLogin.val();
            console.log(username);
        })
    },

    addItem: function() {
        const self = this;
        this.buttonAdd.on('click', function () {
            const value = self.inputItem.val();
            const html = `
                <li class="item flex">
                    <p class="flex">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" class="remove-button flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;
            if (value) {
                self.listContainer.prepend(html);
                self.data.item.inputValue.push(value);
                self.inputItem.val('');
            }

        self.dataObjectUpdate();
            return false;
        });
    },

    removeItem: function () {
        const self = this;
        const arrayItem = self.data.item.inputValue;
        const arrayName = self.data.item.name;
        console.log(self.data);
        this.listContainer.on('click', '.remove-button', function () {
            if ($('.list li').length <= 1) {
                $(this).closest('ul').empty();
            } else {
                $(this).closest('li').remove();
            }
            arrayItem.splice(arrayItem.indexOf(this.innerText));
            arrayName.splice(arrayName.indexOf(this.innerText));
            self.dataObjectUpdate();
        });
    },

    dataObjectUpdate: function () {
        console.log(this.data);
    },


};

(function ($) {

    myApp.init();


})(jQuery);
//
// const addItem = $('.add-item');
// const removeItem = $('.remove');
// const input = $('.item-input');
// const listContainer = $('.list');
//
//
// addItem.on('click', function () {
//     if (input.val()) {
//         listContainer.prepend(`
//                 <li class="item flex">
//                     <p class="flex">${input.val()}</p>
//                     <div class="buttons flex">
//                         <a href="#" name="remove" class="remove flex">
//                             <i class="far fa-trash-alt fa-lg"></i>
//                         </a>
//                     </div>
//                 </li>
//     `)}
//     input.val('');
// });
//
//     $(document).on('click', function () {
//         console.log(this);
//         $(this).closest('li').remove()
//     });
