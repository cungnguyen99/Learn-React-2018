import React,{Component} from 'react'
//Bài liên quan 21
/**
 * Lifecycles là những method trong react được gọi trong quá trình app được gọi
 * mount: là khi chạy app no sẽ tính toán các component cần thiết trong app để thêm vào trang
 * rồi hiển thị lên trên trình duyệt
 * unmount: khi component k dùng nữa( ví dụ khi ta chuyển trang) sẽ bị mất đi
 */
class Counter extends Component{
    constructor(props){
        console.log('Counter constructor')
        super(props)
        this.state={
            count: 0
        }
    }
    increase(){
        this.setState({
            count: this.state.count+1
        })
    }
    decrease(){
        this.setState({
            count: this.state.count-1
        })
    }
    render(){
        console.log('Counter render')
        return(
            <div className="Counter">
                <button onClick={()=>this.decrease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.increase()}>+</button>
            </div>
        )
    }
    componentDidMount(){
        //được gọi lần đầu tiên và duy nhất khi được khởi tạo và gắn vào DOM 
        console.log('Counter did mount')
    }
    componentDidUpdate(){
        //được gọi mỗi khi app render lại. trong TH này khi ta ấn cộng trừ app sẽ render lại
        console.log('Counter did update')
    }
    componentWillUnmount(){
        //được gọi khi một component ngay trước khi nó bị unmount ra khỏi DOM
        console.log('Counter will unmount')
    }
    shouldComponentUpdate(nextProps, nextState){
        /**
         * có 2 giá trị: true và false. mặc định trả về true. nếu trả về true thì component sẽ được render ra
         * false thì sẽ không được render lại.
         * tạo ra state showCounter trong app với gtri mặc định là true, tạo một nút remove counter để xóa
         * component Counter ra khỏi App. Khi nhấn remover counter thì state trong app chuyển 
         * showcounter thành false và làm component counter biến mất, nhưng khi state của app thay đổi và ta chưa
         * gán điều kiện cho this.state.showCounter && <Counter/> nên counter chưa biến mất, khi ta nhấn nút 
         * đó app được gọi lại mà trong app thì lại có tất cả component khác, nên các component khác cũng 
         * sẽ bị render lại dẫn đến làm chậm app. Nên ta sẽ so sánh xem chỉ khi state của component cũng
         * bị thay đổi ta mới render lại component không thì thôi
         */
        if(this.state.count===nextState.count){
            //nếu state không thay đổi thì k render lại
            return false
        }
        return true
    }
}

export default Counter