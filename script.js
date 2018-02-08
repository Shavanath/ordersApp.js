
const myApp = {

    data: {
        name: ["dupa", "chui", "adada", "cycki"],
        item: [],
    },
    buttonAdd: $('.add-item'),
    buttonSubmit: $('.submit-login'),
    inputItem: $('.item-input'),
    inputLogin: $('.login-input'),
    listContainer: $('.list'),


    // init

    init: function () {
        this.addItem();
        this.removeItem();
    },

    // functions

    addItem: function() {
        const self = this;
        this.buttonAdd.on('click', function () {
            const value = self.inputItem.val();
            const html = `
                <li class="item flex">
                    <p class="flex">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" class="remove flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;
            if (value) {
                self.listContainer.prepend(html);
                self.data.item.push(value);
                self.inputItem.val('');
            }

        self.dataObjectUpdate();
            return false;
        });
    },

    removeItem: function () {
        const self = this;
        const arrayItem = self.data.item;
        const arrayName = self.data.name;
        console.log(self.data);
        this.listContainer.on('click', '.remove', function () {
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
