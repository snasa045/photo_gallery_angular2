import { InMemoryDbService } from 'angular-in-memory-web-api';

declare var file: any;

export class InMemoryEntryService implements InMemoryDbService {
    createDb() {
        let entries = [
            {
                id: 1,
                title: 'Stay Cool!!!',
                description: 'Graduation day celebration',
                photo: require('../../photos/Burning-sundown-behind-trees.jpg'),
                comments: [
                    {
                        id: 1,
                        name: 'Vishwa',
                        comment: 'This is my favorite! I love it!'
                    }
                ]
            },
            {
                id: 2,
                title: 'We Four!',
                description: 'Graduated through tough phase!!',
                photo: require('../../photos/German-steam-engine-No.4.jpg'),
                comments: [
                    {
                        id: 2,
                        name: 'Naman Tiwari',
                        comment: 'True!'
                    },
                    {
                        id: 3,
                        name: 'Jay Bathani',
                        comment: 'Yeah Mannn!!'
                    }
                ]
            },
            {
                id: 3,
                title: 'Best Friends',
                description: 'Two supporters',
                photo: require('../../photos/Red-sun-stripe-at-horizon.jpg'),
                comments: []
            },
            {
                id: 4,
                title: 'Dude, You Look Nice Today',
                description: 'Glimpse of future developers',
                photo: require('../../photos/Sundown-behind-fields.jpg'),
                comments: [
                    {
                        id: 4,
                        name: 'Vishwa',
                        comment: 'It looks like trouble is on the way.'
                    },
                    {
                        id: 5,
                        name: 'Palak',
                        comment: 'I imagine this was a shot of a storm!!! Hahahahaha.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Get Together',
                description: `Let's do it!!!`,
                photo: require('../../photos/Water-lilies-and-algas.jpg'),
                comments: [
                    {
                        id: 6,
                        name: 'Aniket',
                        comment: 'Mast Mast!'
                    }
                ]
            }
        ];
        return { entries };
    }
}