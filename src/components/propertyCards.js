import _ from 'lodash';
import helpers from './helper';

function getPropertyCards(data) {
    var cards = '';
    _.forEach(data, function(property, key) {
        var card = `<li class="slide example-1 card" id="slide${key}">
        <div class="wrapper">
            <div class="logo">
              <img src='${property.links.logo}'>
            </div>
            <div class="sticker">
                <span class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>
                  ${property.location}</span>
            </div>
            <div class="data">
                <div class="content">
                    <h1 class="title"><a href="#">${property.name}</a></h1>
                    <div class="more-details">
                      <label for="show-details${key}" class="button more-details${key}" onclick="showCardDetails(this, '#slide${key} .data')">Read more</label>
                    </div>
                    <div class="detail-container">
                      <table>
                        <tbody>
                          <tr>
                            <td>total Properties</td>
                            <td>${property.totalProperties}</td>
                          </tr>
                          <tr>
                            <td>commercial Total</td>
                            <td>${property.commercialTotalCount}</td>
                          </tr>
                          <tr>
                            <td>agent</td>
                            <td>${property.agentCount}</td>
                          </tr>
                          <tr>
                            <td>residential For Rent</td>
                            <td>${property.residentialForRentCount}</td>
                          </tr>
                          <tr>
                            <td>residential For Sale</td>
                            <td>${property.residentialForSaleCount}</td>
                          </tr>
                          <tr>
                            <td>commercial For Rent</td>
                            <td>${property.commercialForRentCount}</td>
                          </tr>
                          <tr>
                            <td>commercial For Sale</td>
                            <td>${property.commercialForSaleCount}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="description">
                        <span class="title">Description</span>
                        <p class="text">${property.description}</p>
                      </div>
                      <div class="actions">
                        <a class="action" href="tel:${property.phone.replace(/\s+/g, '')}"><i class="fa fa-phone" aria-hidden="true"></i> Call</a>
                        <a class="action" href="sms://${property.phone.replace(/\s+/g, '')}"><i class="fa fa-envelope-o" aria-hidden="true"></i> SMS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </li>`;
        cards = cards + card;
    })
    renderCards(cards);
}
function renderCards(cards) {
    const root = document.querySelector('#slides');
    root.innerHTML = cards;
}
window.showCardDetails = function(currentElm, elm) {
    var slide = document.querySelector(elm);
    if (helpers.hasClass(slide, 'expanded')) {
        currentElm.innerHTML = 'Read more';
        helpers.removeClass(slide, 'expanded');
    } else {
        currentElm.innerHTML = 'Hide details';
        helpers.addClass(slide, 'expanded')

    }
}
window.hideCardDetails = function(currentElm, elm) {
    var slide = document.querySelector(elm);
    helpers.removeClass(slide, 'expanded');
}

export default {
    getPropertyCards
};
