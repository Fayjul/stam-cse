import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Papers',
      slug: 'papers',
      text: 'There are many thesis paper on there If you want to explore please click.',
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '2',
      name: 'Upload Papers',
      slug: 'uploadpaper',
      text: 'If you want to up load any paper. You need to fillup this form. Please click.',
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '3',
      name: 'Projects',
      slug: 'projects',
      text: 'There are many thesis project on there If you want to explore please click.',
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '4',
      name: 'Upload Projects',
      slug: 'uploadprojects',
      text: 'If you want to up load any paper. You need to fillup this form. Please click.',
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '1',
      name: 'Resercher Profile',
      slug: 'resercher_profile',
      text: 'You can know about our researcher from this link. If you want to see Please click.',
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '2',
      name: 'Groups',
      slug: 'groups_list',
      text: 'There are many research group on there If you want to explore please click.',
      rating: 4,
      numReviews: 10,
    },
  ],
};
export default data;
