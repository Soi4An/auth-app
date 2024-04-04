'use strict';

const corsOptions = {
  origin: 'https://auth-app-client-vert.vercel.app/',
  methods: 'GET,POST,PATCH',
  credentials: true,
};

module.exports = { corsOptions };
