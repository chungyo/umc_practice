import styled from "styled-components";

// mock 데이터 import
import { MOVIES } from "../../shared/apis/mocks/movies.ts";

// 영화 리스트 컴포넌트
const MovieList = () => {
    return (
        <MovieContainer>
            {MOVIES.results.map((movie) => (
                <MovieCard key={movie.id}>
                    {/* 포스터 이미지 */}
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    {/* 영화 제목 */}
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieDate>{movie.release_date}</MovieDate>
                </MovieCard>
            ))}
        </MovieContainer>
    );
};

export default MovieList;

// 스타일 컴포넌트
const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 20px;
    width: 100%;
    overflow-y: auto;
    
`;

const MovieCard = styled.div`
    width: 8.5rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const MovieImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const MovieTitle = styled.h3`
    font-size: 0.9rem;
    color: #fff;
    text-align: start;
`;

const MovieDate = styled.p`
    font-size: 0.8rem;
    color: #f4f4f4;
    text-align: start;
`;

