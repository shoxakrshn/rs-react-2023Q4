import React from 'react';
import { IHero, IResponse } from '../../types/types';
import { fetchHeroes, searchHeroes } from '../../service/service';

interface Props {
  cbHeroes: (heroes: IHero[]) => void;
  cbLoading: (loading: boolean) => void;
}

type StateType = {
  text: string;
  error: string;
};

class SearchBar extends React.Component<Props, StateType> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public state: StateType = {
    text: localStorage.getItem('searchKey') || '',
    error: '',
  };

  fetchData = async () => {
    const { text } = this.state;
    const { cbHeroes, cbLoading } = this.props;
    if (text.length !== 0) {
      try {
        cbLoading(true);

        const { results }: IResponse = await searchHeroes(text);

        cbHeroes(results);
        cbLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          this.setState({ error: err.message });
        }
      }
    } else {
      try {
        cbLoading(true);

        const { results }: IResponse = await fetchHeroes();
        cbHeroes(results);

        cbLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          this.setState({ error: err.message });
        }
      }
    }
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ text: e.target.value });

  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchKey', this.state.text);

    this.fetchData();
  };

  async componentDidMount(): Promise<void> {
    this.inputRef.current?.focus();
    this.fetchData();
  }

  render() {
    const { text } = this.state;

    if (this.state.error) throw new Error();

    return (
      <form onSubmit={this.submitHandler} className="">
        <input
          className="px-3 py-2 mr-4 rounded"
          type="text"
          placeholder="search"
          value={text}
          onChange={this.changeHandler}
          ref={this.inputRef}
        />
        <button type="submit">Get heroes</button>
      </form>
    );
  }
}

export default SearchBar;
