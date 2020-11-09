import React, {Component } from 'react';
import { View, Image, TouchableOpacity} from "react-native";
import { PROMPTS } from './prompts'



// const [allPrompt, setPrompt] = useState<QuizPropsState[]>([]);
// const [userSelectedAnswers, setUserSelectedAnswers] = useState<
//     currAnswerObjectProps[]
//   >([]);
//   const [score, setScore] = useState<number>(0);
//   const [curNum, setCurNum] = useState<number>(0);
//   const [TOTAL_QUESTIONS] = useState<number>(10);
//   const [quizOver, setQuizOver] = useState<boolean>(false);
class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
			prompts: PROMPTS,
			score: 0
        };
	
	
	onPressWrong = () => {
	  console.log ("Sorry, Wrong Answer");
	  
		}
	
	onPressRight =() => {
		this.setState({
			score: this.state.score + 1,
			isCorrect: true
		  })
		  nextPrompt();
	}
	nextPrompt = () => {
		const answer = this.state.prompts[this.state.number].userAnswer;
				
			
	};
  }

    render() {
        return (
		
			  <Image source={{ uri: prompt.image }} style={styles.promptImage} />
			  
			<View>
				<TouchableOpacity onPress={this.onPressRight}/>
			</View>
			<View>	
				<TouchableOpacity onPress={this.onPressWrong}/>
			</View>
		
		);
	}	  
				
			
		
	
	
}

export default GameScreen;

 