export const resolvers = {
  Query: {
    user: async (_: any, args: any) => {
      const { id } = args;

      // return await User.findOne({ where: { id: id } });
    },
  },
  Mutation: {
    register: async (_: any, args: any) => {
      const { name, email, age, register_at } = args;
      try {
        // const user = User.create({
        //   name,
        //   email,
        //   age,
        //   register_at,
        console.log('we are in mutation');
        // });

        // await user.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
