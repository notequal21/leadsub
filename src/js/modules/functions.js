
export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  });
}

// (gist - b47008824b0175d587f9acbc51892319)


export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger')
    const menu = document.querySelector('.header-body__btns')
    const body = document.querySelector('body')

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
      } else {
        openBtn.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
      }
    }

    openBtn.addEventListener('click', toggleBurger)
  }
}

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn')
    const modal = document.querySelector('.contactus')
    const modalBg = document.querySelector('.contactus__bg')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active')
        body.classList.remove('lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`
            item.style.padding = ` 0 20px`
          })
        }
      } else {
        modal.classList.add('active')
        body.classList.add('lock')
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
          })
        }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalBg.addEventListener('click', toggleModal)
  }
}

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) { // disable script if resolution less than 1000px 

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });

  }
}

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300)
    });
  });
}

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
}

export const upBtn = () => {

  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
    }
  });
}

export const dropdownMenu = () => {
  if (document.querySelector('.dropdown-btn')) {
    const dropdownBtn = document.querySelector('.dropdown-btn')
    const dropdown = document.querySelector('.aside-menu__item_dropdown')
    const dropdownContent = document.querySelector('.aside-menu__dropdown')
    dropdownBtn.addEventListener('click', () => {
      if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active')
      } else {
        dropdown.classList.add('active')
      }
    })
  }
}

export const actionsShow = () => {
  if (document.querySelector('.content-controlls__actions-btn')) {
    const actionsBtn = document.querySelector('.content-controlls__actions-btn')
    const actionsList = document.querySelector('.content-controlls__actions-list')
    actionsBtn.addEventListener('click', () => {
      if (actionsList.classList.contains('show')) {
        actionsList.classList.remove('show')
      } else {
        actionsList.classList.add('show')
      }
    })
  }
}

export const scenMenuShow = () => {
  if (document.querySelector('.scenarious-item__menu-btn')) {
    const scenMenuBtns = document.querySelectorAll('.scenarious-item__menu-btn')
    const scenMenuList = document.querySelectorAll('.scenarious-item__menu')
    scenMenuBtns.forEach(item => {
      item.addEventListener('click', (event) => {

        const ev = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath());

        if (path[1].classList.contains('scenarious-item__menu')) {
          if (path[1].classList.contains('open')) {
            path[1].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[1].classList.add('open')
          }
        }
        if (path[2].classList.contains('scenarious-item__menu')) {
          if (path[2].classList.contains('open')) {
            path[2].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[2].classList.add('open')
          }
        }
        if (path[3].classList.contains('scenarious-item__menu')) {
          if (path[3].classList.contains('open')) {
            path[3].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[3].classList.add('open')
          }
        }
      })
    })
  }
}

export const profileToggle = () => {
  if (document.querySelector('.aside-profile')) {
    const profileBtn = document.querySelector('.aside-profile')
    const asideMenu = document.querySelector('.aside-menu')
    const profileManager = document.querySelector('.profile-manager')
    profileBtn.addEventListener('click', () => {
      if (profileBtn.classList.contains('active')) {
        profileBtn.classList.remove('active')
        profileManager.classList.remove('active')
        asideMenu.classList.remove('hide')
      } else {
        profileBtn.classList.add('active')
        profileManager.classList.add('active')
        asideMenu.classList.add('hide')
      }
    })
  }
}

export const asideToggle = () => {
  if (document.querySelector('.aside')) {
    const asideBtn = document.querySelector('.aside__toggle')
    const aside = document.querySelector('.aside')

    asideBtn.addEventListener('click', () => {
      if (aside.classList.contains('mini')) {
        aside.classList.remove('mini')
        asideBtn.classList.remove('active')
      } else {
        aside.classList.add('mini')
        asideBtn.classList.add('active')
      }
    })

    if (window.innerWidth <= 767) {
      aside.classList.add('mini')
      asideBtn.classList.add('active')
    }
    window.addEventListener('resize', () => {
      aside.classList.add('mini')
      asideBtn.classList.add('active')
    })

  }
}

export const scenAddNew = () => {
  if (document.querySelector('.scenarious-item__menu-btn')) {
    const scenAddNewBtn = document.querySelector('.header__add')
    const scenAddNewBtnClose = document.querySelector('.addnew-body__btns-cancel')
    const addnew = document.querySelector('.addnew')
    scenAddNewBtn.addEventListener('click', () => {
      if (addnew.classList.contains('show')) {
        addnew.classList.remove('show')
      } else {
        addnew.classList.add('show')
      }
    })
    scenAddNewBtnClose.addEventListener('click', () => {
      if (addnew.classList.contains('show')) {
        addnew.classList.remove('show')
      } else {
        addnew.classList.add('show')
      }
    })
  }
}

export const addNewKeyword = () => {
  if (document.querySelector('.addnew-keyword')) {
    const scenAddNewBtns = document.querySelectorAll('.addnew-keyword__btn')
    const scenAddNewBtnClose = document.querySelector('.addnew-keyword__cancel')
    const addnew = document.querySelector('.addnew-keyword')
    scenAddNewBtns.forEach(item => {
      item.addEventListener('click', () => {
        if (addnew.classList.contains('show')) {
          addnew.classList.remove('show')
        } else {
          addnew.classList.add('show')
        }
      })
    })
    scenAddNewBtnClose.addEventListener('click', () => {
      if (addnew.classList.contains('show')) {
        addnew.classList.remove('show')
      } else {
        addnew.classList.add('show')
      }
    })
  }
}

export const selectItem = () => {
  if (document.querySelector('.scenarious-item')) {
    const items = document.querySelectorAll('.scenarious-item')
    const checkboxes = document.querySelectorAll('.scenarious-item__check')
    const selectAll = document.querySelector('.content-controlls__all')
    checkboxes.forEach(item => {
      item.addEventListener('click', (event) => {
        const ev = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath());

        if (path[3].classList.contains('checked')) {
          path[3].classList.remove('checked')
        } else {
          path[3].classList.add('checked')
        }
      })
    })

    selectAll.addEventListener('click', (e) => {
      if (selectAll.classList.contains('checked')) {
        selectAll.classList.remove('checked')
        items.forEach(item => {
          item.classList.remove('checked')
        })
        checkboxes.forEach(item => {
          item.classList.remove('checked')
        })
        // item.classList.remove('checked')
      } else {
        // e.path[3].classList.add('checked')
        // e.path[0].classList.add('checked')
        selectAll.classList.add('checked')
        items.forEach(item => {
          item.classList.add('checked')
        })
        checkboxes.forEach(item => {
          item.classList.add('checked')
        })
        // item.classList.add('checked')
      }
    })
  }
}

export const keywordsMenuShow = () => {
  if (document.querySelector('.keywords-item__words-contains')) {
    const keywordsMenuBtn = document.querySelectorAll('.keywords-item__words-btn')
    const keywordsMenuItem = document.querySelectorAll('.keywords-item__words-contains')

    keywordsMenuBtn.forEach(item => {
      item.addEventListener('click', (event) => {
        const ev = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath());
        console.log(path);
        if (path[1].classList.contains('open')) {
          path[1].classList.remove('open')
        } else {
          path[1].classList.add('open')
        }
      })
    })
  }
}

export const keywordsSelect = () => {
  if (document.querySelector('.modalselect')) {
    const selectBtns = document.querySelectorAll('.keywords-item__send-botname')
    const selectMenu = document.querySelector('.modalselect')
    const selectClose = document.querySelector('.modalselect-body__close')

    selectBtns.forEach(item => {
      item.addEventListener('click', () => {
        if (selectMenu.classList.contains('show')) {
          selectMenu.classList.remove('show')
        } else {
          selectMenu.classList.add('show')
        }
      })
    })
    selectClose.addEventListener('click', () => {
      selectMenu.classList.remove('show')
    })
  }
}

export const botlistMenuShow = () => {
  if (document.querySelector('.botlist-item__menu-btn')) {
    const scenMenuBtns = document.querySelectorAll('.botlist-item__menu-btn')
    const scenMenuList = document.querySelectorAll('.botlist-item__menu')
    scenMenuBtns.forEach(item => {
      item.addEventListener('click', (event) => {

        const ev = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath());

        if (path[1].classList.contains('botlist-item__menu')) {
          if (path[1].classList.contains('open')) {
            path[1].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[1].classList.add('open')
          }
        }
        if (path[2].classList.contains('botlist-item__menu')) {
          if (path[2].classList.contains('open')) {
            path[2].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[2].classList.add('open')
          }
        }
        if (path[3].classList.contains('botlist-item__menu')) {
          if (path[3].classList.contains('open')) {
            path[3].classList.remove('open')
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
          } else {
            scenMenuList.forEach(item => {
              item.classList.remove('open')
            })
            path[3].classList.add('open')
          }
        }
      })
    })
  }
}

export const botlistInfoShow = () => {
  if (document.querySelector('.botlist-item')) {
    const botlistContainer = document.querySelector('.botlist')
    const infoBtns = document.querySelectorAll('.botlist-item')
    const infoItem = document.querySelector('.botlist-info')
    const btnClose = document.querySelector('.botlist-info__close')

    const botname = document.querySelector('.info-botname')
    const username = document.querySelector('.info-username')
    const token = document.querySelector('.info-token')
    const createday = document.querySelector('.info-createday')
    const createtime = document.querySelector('.info-createtime')
    const creategmt = document.querySelector('.info-creategmt')
    const createplace = document.querySelector('.info-createplace')
    const subscription = document.querySelector('.info-subscription')

    infoBtns.forEach(item => {
      item.addEventListener('click', (event) => {

        // item.dataset.

        const ev = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath());

        if (event.target.classList.contains('botlist-item__menu-btn') || event.target.classList.contains('botlist-item__menu-item')) {
          return
        } else {
          if (item.classList.contains('active')) {
            item.classList.remove('active')
            botlistContainer.classList.remove('open')
            infoItem.classList.remove('open')
          } else {
            infoBtns.forEach(item => {
              item.classList.remove('active')
            })
            item.classList.add('active')
            botlistContainer.classList.add('open')
            infoItem.classList.add('open')

            botname.innerHTML = item.dataset.botname
            username.innerHTML = item.dataset.username
            token.innerHTML = item.dataset.token
            createday.innerHTML = item.dataset.createday
            createtime.innerHTML = item.dataset.createtime
            creategmt.innerHTML = item.dataset.creategmt
            createplace.innerHTML = item.dataset.createplace
            subscription.innerHTML = item.dataset.subscription
          }
        }

      })
    })
    btnClose.addEventListener('click', () => {
      botlistContainer.classList.remove('open')
      infoItem.classList.remove('open')
      infoBtns.forEach(item => {
        item.classList.remove('active')
      })
    })
  }
}

export const addNewBotlistToken = () => {
  if (document.querySelector('.addnew-botlist-token')) {
    const scenAddNewBtns = document.querySelectorAll('.botlist-info__token-btn')
    const scenAddNewBtnClose = document.querySelector('.addnew-botlist-token__cancel')
    const addnew = document.querySelector('.addnew-botlist-token')
    scenAddNewBtns.forEach(item => {
      item.addEventListener('click', (event) => {
        if (addnew.classList.contains('show')) {
          addnew.classList.remove('show')
        } else {
          addnew.classList.add('show')
        }
      })
    })
    scenAddNewBtnClose.addEventListener('click', () => {
      if (addnew.classList.contains('show')) {
        addnew.classList.remove('show')
      } else {
        addnew.classList.add('show')
      }
    })
  }
}

export const deleteBotlistToken = () => {
  if (document.querySelector('.botlist-delete')) {
    const scenAddNewBtns = document.querySelectorAll('.botlist-item__menu-item')
    const scenAddNewBtnClose = document.querySelector('.botlist-delete__cancel')
    const addnew = document.querySelector('.botlist-delete')
    scenAddNewBtns.forEach(item => {
      item.addEventListener('click', (event) => {
        if (addnew.classList.contains('show')) {
          addnew.classList.remove('show')
        } else {
          addnew.classList.add('show')
        }
      })
    })
    scenAddNewBtnClose.addEventListener('click', () => {
      if (addnew.classList.contains('show')) {
        addnew.classList.remove('show')
      } else {
        addnew.classList.add('show')
      }
    })
  }
}