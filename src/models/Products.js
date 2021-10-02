module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shortDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        originalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        salePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        promotionPercent: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        images: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isFreeShip: {
            type: DataTypes.BOOLEAN,
        },
        categoryId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Products;
};
