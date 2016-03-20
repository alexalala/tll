module.exports = function Galiria() {
  'use strict';

  /** @const instance Instance of Galiria, a Singleton. */
  var instance;

  /**
   * must clone de <figure> element from the DOM
   * add de .galiria__container__figure element class on it
   * and append it on .galiria__container element class.
   *
   * also, set the modifier class .galiria__container--active on
   * .galiria__container element class.
   *
   * @param Event e Event when clickin on the image.
   */
  function _imageOnClick(e) {
    instance.figure = e.target.parentNode.cloneNode(true);
    instance.figure.classList.add('galiria__container__figure');

    instance.container.appendChild(instance.figure);

    instance.container.classList.add('galiria__container--active');
  }

  /**
   * should remove the figure from the DOM
   * and from the {@var instance}.
   *
   * also removes the .galiria__container--active modifier class
   * from the container in {@var instance}.
   *
   * @param Event e Event when clickin on container.
   */
  function _containerOnClick(e) {
    if (instance.figure) {
      instance.container.removeChild(instance.figure);
      instance.figure = null;
    }

    instance.container.classList.remove('galiria__container--active');
  }

  /**
   * create a instance object with a container
   * and a list (the element with '.galiria' block class)
   *
   * @return instance An object with container DOM element, and a list
   */
  function _createInstance() {
    return {
      container: document.body.appendChild(_createContainerElement()),
      list: document.querySelectorAll('.galiria > figure')
    };
  }

  /**
   * creates a <div>, which will have a class .galiria__container
   * and a event listener on click.
   *
   * @return HTMLDivElement A div with .galiria__container element class
   */
  function _createContainerElement() {
    var container = document.createElement("div");

    container.classList.add('galiria__container');
    container.addEventListener('click', _containerOnClick);

    return container;
  }

  /**
   * set event listeners on all the childrens
   * of {@var instance.list}, the '<figure>' tags.
   */
  function _setImageEvents() {
    for (var i = instance.list.length; i--;)
      instance.list[i].children[0].addEventListener('click', _imageOnClick);
  }

  /**
   * actually initialize the Galiria
   */
  function init() {
    instance = _createInstance();
    _setImageEvents();
  }

  init();
};
