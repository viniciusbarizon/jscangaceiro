System.register(['./ConnectionFactory.js', '../domain/trading/TradingDao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, TradingDao;
    async function getTradingDao() {
        let conn = await ConnectionFactory.getConnection();
        return new TradingDao(conn);
    }

    _export('getTradingDao', getTradingDao);

    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_domainTradingTradingDaoJs) {
            TradingDao = _domainTradingTradingDaoJs.TradingDao;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=DaoFactory.js.map