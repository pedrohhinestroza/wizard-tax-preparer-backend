module.exports = (sequelize, DataTypes) => {
    const Forms = sequelize.define('Forms', {
        step1_data: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        step2_data: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        step3_data: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    });

    return Forms;
};
