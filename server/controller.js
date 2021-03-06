const Sequelize = require('sequelize');

const {
  Comments,
  Users,
  Song,
  Playlist 
} = require('../database/models.js');

module.exports = {
  relatedTracks: {
    get: (req, res) => {
      console.log('songs get');
      const { tags } = req.query;
      Song.findAll({
        // where: {
        //   tags: tags
        // },
        order: [
          [Sequelize.fn('RANDOM')]
        ],
        limit: 3
      })
      .then(tracks => {
        if (tracks) {
          res.status(200).send(tracks);
        } else {
          res.status(404).send('tracks get error');
        }
      })
      .catch(err => res.status(404).send(err));
    }
  },
  playlists: {
    get: (req, res) => {
      console.log('playlists get');
      // implement checking which playlists they're in
      Playlist.findAll({
        order: [
          [Sequelize.fn('RANDOM')]
        ],
        limit: 3
      })
      .then(lists => {
        if (lists) {
          res.status(200).send(lists);
        } else {
          res.status(404).send('lists get error');
        }
      })
      .catch(err => res.status(404).send(err));
    }
  },
  usersLiked: {
    get: (req, res) => {
      console.log('users who liked get');
      Users.findAll({
        order: [
          [Sequelize.fn('RANDOM')]
        ],
        limit: 9
      })
      .then(users => {
        if (users) {
          res.status(200).send(users);
        } else {
          res.status(404).send('users get error');
        }
      })
      .catch(err => res.status(404).send(err));
    }
  },
  usersReposts: {
    get: (req, res) => {
      console.log('users who reposted get');
      Users.findAll({
        order: [
          [Sequelize.fn('RANDOM')]
        ],  
        limit: 9
      })
      .then(users => {
        if (users) {
          res.status(200).send(users);
        } else {
          res.status(404).send('users get error');
        }
      })
      .catch(err => res.status(404).send(err));
    }
  }
}