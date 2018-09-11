import Resolutions from './resolutions';

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      console.log(userId);

      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name,
      });

      return Resolutions.findOne(resolutionId);
    },
  },
};
