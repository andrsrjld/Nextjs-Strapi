'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  fetch: (params) => {
    // Select field to populate.
    const populate = Blog.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);
    return Blog.forge(_.pick(params, 'Slug')).fetch({
      withRelated: populate
    });
  },
};
