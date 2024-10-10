import Button from "../Button/Button";


interface SearchProps{
    onSubmit: () => void;
}

const Search: React.FC<SearchProps> = ({ onSubmit}) => { 

    return (
        <div>
<Button type='button' onClick={onSubmit} />
        </div>
    )


}
export default Search;