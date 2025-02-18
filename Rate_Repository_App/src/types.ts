

export interface Review {
    __typename?: string;
    id: string;
    text: string;
    rating: number;
    createdAt: string;
    repositoryId?: string;
    user: {
        __typename?: string;
        id: string;
        username: string;
    };
};

export interface Repo {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
    url?: string;
};

export interface RepoWithURL extends Repo {
    url: string;
}

export interface FullRepo extends RepoWithURL {
    name: string;
    ownerName: string;
    createdAt: string;
}

export interface Sort {
    orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
    orderDirection: 'DESC' | 'ASC';
}

export interface SearchFilter extends Sort {
    searchKeyword?: string;
}