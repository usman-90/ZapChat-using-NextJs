import Input from './input';
import ChatBox from './chatBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './left.css'

const Left = () => {
	return (<section className="w-21rem px-2 rounded m-2 bg-moonstone ">
		<div className="mx-1  rounded my-3 ">
			<h1 className="x-font mustard">Hi, User</h1>
		</div>
		<Input />
		<div className='chat-container mt-1'>
			<ChatBox />
			<ChatBox />
			<ChatBox />
			<ChatBox />
			<ChatBox />
			<ChatBox />
			<ChatBox />
			<ChatBox />
		</div>

	</section>)
}
export default Left;

