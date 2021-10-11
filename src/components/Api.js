export class Api {
    constructor(url) {
        this._url = url;

    }

    getUserdata() {
      console.log('get')
        return fetch('https://nomoreparties.co/v1/cohort-28/users/me', {
                method: 'GET',
                headers: {
                authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
                'Content-Type': 'application/json'
                }
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
          console.log(err);
        });

    }

    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-28/cards', {
                method: 'GET',
                headers: {
                authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
                'Content-Type': 'application/json'
                }
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
          console.log(err);
        });

    }

    sendUserData(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-28/users/me', {
            method: 'PATCH',
            headers: {
              authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: data.name,
              about: data.about
            })
          })
          .then((res) => {
            return res.json();})
          .catch((err) => {
           console.log(err);
          });
    
    }

    sendUserCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-28/cards', {
            method: 'POST',
            headers: {
              authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: data.name,
              link: data['image-link']
            })
          })
          .then((res) => {
            return res.json();})
            .catch((err) => {
              console.log(err);
            });
    
    }


    deleteCardRequest(cardId) {
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-28/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
        }
      })
      .then((res) => {
        return res.json();})
        .catch((err) => {
          console.log(err);
        });

    }


    pressLikeRequest(cardId) {
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-28/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return res.json();})
        .catch((err) => {
          console.log(err);
        });

    }

    deleteLikeRequest(cardId) {

      return fetch(`https://mesto.nomoreparties.co/v1/cohort-28/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return res.json();})
        .catch((err) => {
          console.log(err);
        });

    }


    changeAvatarRequest(data) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-28/users/me/avatar', {
        method: 'PATCH',
        headers: {
          authorization: '7623580f-b1ba-482c-8170-fbcdd1434884',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: data.link,
        })
      })
      .then((res) => {
        return res.json();})
        .catch((err) => {
          console.log(err);
        });

    }
    }

    
