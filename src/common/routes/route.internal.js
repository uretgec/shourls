module.exports = {
    DASHBOARD : '/dashboard/:access_token',
    LOGIN_CHECK : '/login/:access_token',
    LOGOUT : '/logout/:access_token',
    GENERATOR_CODE : '/generator/:access_token',

    BLACKLIST_LIST : '/blacklists/:access_token',
    BLACKLIST_GET : '/blacklist/:id/:access_token',
    BLACKLIST_POST : '/blacklist/:id/:access_token',

    SHOURL_LIST : '/shourls/:access_token',
    SHOURL_GET : '/shourl/:id/:access_token',
    SHOURL_POST : '/shourl/:id/:access_token',

    AUTH_LIST : '/auths/:access_token',
    AUTH_GET : '/auth/:id/:access_token',
    AUTH_POST : '/auth/:id/:access_token',

    USER_LIST : '/users/:access_token',
    USER_GET : '/user/:id/:access_token',
    USER_POST : '/user/:id/:access_token',

    LOG_LIST : '/logs/:access_token',
    LOG_GET : '/log/:id/:access_token',
    LOG_POST : '/log/:id/:access_token'
};