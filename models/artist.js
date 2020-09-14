module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {});
  Artist.associate = function (models) {
    // associations can be defined here
    Artist.hasMany(models.Song, {
      foreignKey: 'artistId',
      onDelete: 'CASCADE'
    })
  };
  return Artist;
};