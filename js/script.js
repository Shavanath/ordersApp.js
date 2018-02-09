
const myApp = {

    data: (localStorage.getItem('testing')) ? JSON.parse(localStorage.getItem('testing')):{
        id: [],
        name: [],
        inputValue: []
    },

    currentUsername: {
        name: []
    },

    ajaxUrl: 'php/login.php',
    inputLogin: $('.login-input'),
    buttonUsername: $('.submit-login'),
    inputItem: $('.item-input'),
    buttonAdd: $('.add-item-button'),
    listContainer: $('.list'),
    tabClicked: $('.tab-clicked'),
    tabDisplay: $('.tab-display'),


    // init

    init: function () {
        this.dataObjectUpdate();
        // this.iterate();
        this.renderList();
        this.showContentOnClick();
        this.setUsername();
        this.addItem();
        this.removeItem();
    },

    // functions

    renderList: function () {
        const self = this;
        console.log(self.data.inputValue);
        console.log(self.data.name);
        console.log(self.data.id);
        console.log(self.data.id);
        for (let i = 0; i < self.data.inputValue.length; i++) {
            const value = self.data.inputValue[i];
            const name = self.data.name[i];
            console.log(value);
            console.log(name);
            self.addItemFromLocalStorage(value, name)
        }
    },

    setUsername: function (username) {
        this.currentUsername.name = [username];
    },

    showContentOnClick: function () {
        const self = this;
        this.tabClicked.on('click', function () {
            self.tabDisplay.toggleClass('active')
        })
    },

    ajaxPost: function () {
        const self = this;
        const username = self.inputLogin;
    },

    addItemFromLocalStorage: function (value, name, id) {
        const self = this;
        const html = `
                <li class="item flex">
                    <p class="flex">${id} </p>
                    <p class="flex">${name} </p>
                    <p class="flex value-paragraph">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" class="remove-button flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;
        if (value && name && id) {
            self.listContainer.prepend(html);
        }
    },

    addItem: function() {
        const self = this;
        let i = 0;
        this.buttonAdd.on('click', function () {
            const name = self.currentUsername.name;
            const value = self.inputItem.val();
            const html = `
                <li class="item flex">
                    <p class="flex">${name} </p>
                    <p class="flex value-paragraph">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" class="remove-button flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;

            if (value) {
                self.data.id.push(i);
                self.listContainer.prepend(html);
                self.data.inputValue.push(value);
                self.data.name.push(name[0])
            }

            i++;
        self.dataObjectUpdate();
            return false;
        });
    },

    // iterate: function () {
    //     const self = this;
    //     const arrayItem = self.data.inputValue;
    //     const arrayName = self.data.name;
    //     for (let i = 0; i < arrayItem.length; i++) {
    //         console.log(i);
    //     }
    // },

    removeItem: function () {
        const self = this;
        const arrayItem = self.data.inputValue;
        const arrayName = self.data.name;
        const arrayId = self.data.id;
            this.listContainer.on('click', '.remove-button', function () {
                if ($('.list li').length <= 1) {
                    $(this).closest('ul').empty();
                } else {
                    $(this).closest('li').remove();
                }
                arrayItem.splice(arrayItem.indexOf(this.innerText));
                arrayName.splice(arrayName.indexOf(this.innerText));
                arrayId.splice(arrayId.indexOf(this.innerText));
                self.dataObjectUpdate();
            });
    },

    dataObjectUpdate: function () {
        console.log(this.data);
        // localStorage.clear();
        localStorage.setItem('testing', JSON.stringify(this.data));
        // console.log(localStorage.getItem('testing'));
    },


};

(function ($) {

    myApp.init();


})(jQuery);

