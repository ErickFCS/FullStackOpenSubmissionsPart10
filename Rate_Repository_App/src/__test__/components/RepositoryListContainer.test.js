import RepositoryListContainer from "../../components/RepositoryList/RepositoryListContainer";
import { render, screen, within } from '@testing-library/react-native';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const rawRepositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };
            const repositories = rawRepositories.edges?.map((e) => (e.node));
            render(<RepositoryListContainer repositories={repositories} />)
            // screen.debug();
            const [repo1, repo2] = screen.getAllByTestId('repositoryItem');
            const [
                fullName1,
                description1,
                language1,
                stargazersCount1,
                stars1,
                forksCount1,
                forks1,
                reviewCount1,
                reviews1,
                ratingAverage1,
                ratings1
            ] = within(repo1).getAllByTestId('nativeText')
            const [
                fullName2,
                description2,
                language2,
                stargazersCount2,
                stars2,
                forksCount2,
                forks2,
                reviewCount2,
                reviews2,
                ratingAverage2,
                ratings2
            ] = within(repo2).getAllByTestId('nativeText')
            expect(fullName1).toHaveTextContent('jaredpalmer/formik');
            expect(description1).toHaveTextContent('Build forms in React, without the tears');
            expect(language1).toHaveTextContent('TypeScript');
            expect(forksCount1).toHaveTextContent('1.6k');
            expect(stargazersCount1).toHaveTextContent('21.8k');
            expect(ratingAverage1).toHaveTextContent('88');
            expect(reviewCount1).toHaveTextContent('3');
            expect(fullName2).toHaveTextContent('async-library/react-async');
            expect(description2).toHaveTextContent('Flexible promise-based React data loader');
            expect(language2).toHaveTextContent('JavaScript');
            expect(forksCount2).toHaveTextContent('69');
            expect(stargazersCount2).toHaveTextContent('1.7k');
            expect(ratingAverage2).toHaveTextContent('72');
            expect(reviewCount2).toHaveTextContent('3');
        });
    });
});