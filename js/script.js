
const myApp = {

    // logged user data

    currentUser: {},
    currentUserId: {},

    // main data container

    data: [],

    // variables

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
        this.addItemFromLocalStorage();
        this.showContentOnClick();
        this.addItem();
        this.removeItem();
    },

    // methods


    setUser: function (username) {
        this.currentUser = username;
    },

    setUserId: function (userId) {
        this.currentUserId = userId;
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

    addItemFromLocalStorage: function () {
        const self = this;
        for(let i = 0; i < localStorage.length; i++){
            const name = JSON.parse(localStorage.getItem(localStorage.key(i))).userName;
            const value = JSON.parse(localStorage.getItem(localStorage.key(i))).orderValue;
            const html = `
                <li class="item flex">
                    <p class="flex">${name} </p>
                    <p class="flex value-paragraph">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" data-name="${name}" data-value="${value}" class="remove-button flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;
            self.listContainer.prepend(html)
        }},

    addItem: function() {
        const self = this;
        this.buttonAdd.on('click', function () {
            const name = self.currentUser;
            const value = self.inputItem.val();
            const html = `
                <li class="item flex">
                    <p class="flex">${name} </p>
                    <p class="flex value-paragraph">${value}</p>
                    <div class="buttons flex">
                        <a href="#" name="remove" data-name="${name}" data-value="${value}" class="remove-button flex">
                            <i class="far fa-trash-alt fa-lg"></i>
                        </a>
                    </div>
                </li>
    `;

            if (value) {
                self.listContainer.prepend(html);
                self.data.push({userId: self.currentUserId, userName: self.currentUser, orderValue: value});
                self.data.map(function (item) {
                    localStorage.setItem(`${value}${name}`, JSON.stringify(item));
                })
            }
        self.dataObjectUpdate();
            return false;
        });
    },

    removeItem: function () {
        const self = this;
            this.listContainer.on('click', '.remove-button', function () {
                const keyValue = $(this).data('value');
                const keyName = $(this).data('name');
                if ($('.list li').length <= 1) {
                    $(this).closest('ul').empty();
                } else {
                    $(this).closest('li').remove();
                }

                localStorage.removeItem(`${keyValue}${keyName}`);
                self.dataObjectUpdate();
            });
    },

    dataObjectUpdate: function () {
        // localStorage.clear();
    },


};

(function ($) {

    myApp.init();


})(jQuery);

