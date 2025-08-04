export interface ProfileState {
    data: {
        username: string,
        about?: string,
        status?: string,
        avatarUrl?: string,
        favouriteTracks?: any[]
        friends?: any[]
    } | null
    loading: boolean
    error: string | null
}