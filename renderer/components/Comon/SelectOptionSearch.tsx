import React from "react";
import { TableDatas } from '../../pages/TableCrud/TableData';
 
interface SelectOptionProps {
    name: string,
    data: any,
    getUniq: (uniq: string, entered: boolean) => void
}
class SelectOptionSearch extends React.Component<SelectOptionProps> {
    state = { 
        searchKeyword: '',
        isLitst: false,
        cursor: 0,
        isKeyUpEd: false,
        item: '',
        itemUniq: '',
        type: 'text'
      }

      constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        
    }
    // selecting the list with mouse clicking...
      selectList (item) {
       
        item.title ? this.setState({item: item.title, isLitst: false, searchKeyword: ''}) : this.setState({item: item.name, isLitst: false, searchKeyword: ''})
        this.props.getUniq(item.uniq, false)
        // console.log(item.uniq)
       
    }

    // handling the up or down key by pressing keyboard  
      handleKeyDown(e) {
        var { cursor } = this.state
        this.setState({isKeyUpEd: true})
        if (e.keyCode === 38 && cursor > 0) {
            
          this.setState({
            cursor: cursor - 1
          })
         
        } else if (e.keyCode === 40 && cursor <= this.props.data.length -1) {
            
          this.setState( {
            cursor: cursor + 1
          })
          
        }

        if ( e.keyCode === 13 ) {
          this.props.getUniq(this.state.itemUniq, true)
        }
      }

      // showing list items with searchKeyword
      listItem() {
        const itemListStyle = "h-10 w-full text-left pl-5 bg-gray flex items-center mb-1 rounded "
        var items = this.props.data.filter(
            (item) => { return item.title ? item.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1 : item.name.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1}
        )
        return (<div className="h-48 w-full active rounded py-2 px-2 border border-primary shadow-lg overflow-y-auto">
                    { items.map((item, index) => 
                          {
                             
                          if(index === this.state.cursor -1 && this.state.isKeyUpEd === true )
                             {
                                
                                try {

                                   item.title ? this.setState({item: item.title, itemUniq: item.uniq}) : this.setState({item: item.name, itemUniq: item.uniq})
                                  //  this.props.getUniq(item.uniq)  
                                   
                                } catch (error) {
                                    
                                }
                                
                              return <div key={index} onClick={ () => this.selectList(item) } className={itemListStyle}>{item.title ? item.title : item.name}</div> 
                            }
                        
                            else{ return <div key={index}  onClick={ () => this.selectList(item) } className="h-10 w-full text-left hover:bg-gray pl-5 bg-whiteGray flex items-center mb-1 rounded ">{item.title? item.title : item.name}</div>}

                        } 
                        
                    )}
                            

                </div>)
    }

    render() {  
        return ( 
            <div className="w-full overflow-y-auto h-full">
                        <div className="text-center font-bold text-primary text-xl uppercase">{this.props.name}</div>

                            <div className="flex flex-row mb-1" onClick={(e) => this.state.isLitst? this.setState({isLitst: false, searchKeyword: ''}) : this.setState({isLitst: true})}>
                                <input type="text" onKeyDown={this.handleKeyDown } value={this.state.item} placeholder="Search or Select" onChange={(e) => this.setState({searchKeyword: e.target.value, item: e.target.value})}  className="w-full pl-2 border border-primary rounded-tl outline-none rounded-bl h-10" />
                                <div className="w-10 h-10 border-t border-r border-b border-primary rounded-tr rounded-br flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            
                            {this.state.isLitst ? this.listItem() : null}
                               
                 

                            
                        </div>
         );
    }
}
 
export default SelectOptionSearch;