module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    lyrics: DataTypes.STRING
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, {
      foreignKey: 'artistId'
    })
    Song.belongsTo(models.Genre, { 
      foreignKey: 'genreId'
    })
  };
  return Song;
};