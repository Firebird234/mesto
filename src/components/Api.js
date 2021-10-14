export class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        console.log(this._headers)
    }

    getUserdata() {
      console.log('get')
        return fetch(`${this._baseUrl}users/me`, {
                method: 'GET',
                headers: this._headers
        })
        .then(this._checkResponse);

    }

    getCards() {
        return fetch(`${this._baseUrl}cards`, {
                method: 'GET',
                headers: this._headers
        })
        .then(this._checkResponse);

    }

    sendUserData(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              about: data.about
            })
          })
          .then(this._checkResponse);
    
    }

    sendUserCard(data) {
        return fetch(`${this._baseUrl}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              link: data['image-link']
            })
          })
          .then(this._checkResponse);
    
    }


    deleteCardRequest(cardId) {
      return fetch(`${this._baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._checkResponse);

    }


    pressLikeRequest(cardId) {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(this._checkResponse);

    }

    deleteLikeRequest(cardId) {

      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._checkResponse);

    }


    changeAvatarRequest(data) {
      return fetch(`${this._baseUrl}users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.link,
        })
      })
      .then(this._checkResponse);

    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
    }
    }

    
