
	function Tabella(el, options){

		this.defaults = {
			periods : null,
			rows : null,
			/**
			* BREAKPOINTS : 
			* 1st element in array is the breakpoint, 
			* the 2nd is the number of cells to be shown
			* Default breakpoint is from [0,1], just one element is shown
			*/
			breakpoints : {
				small : [300,2],
				medium : [540,3],
				large : [720,4],
				xlarge : [1080,5]
			},
			from : 'from',
			to : 'to'
		};

		this.periods = null;
		this.rows = null;

		//Initialize the current breakpoint to the minimum breakpoint
		this.currentBreakpoint = [0,1];
		this.cellWidth = 0;

		this.el = el;

		try{
			if(typeof el !== 'undefined'){
				if(typeof options !== 'undefined'){
					this.options = extend(this.defaults, options);
				}else{
					throw new TabellaException('You did not pass any options to the constructor');
				}
			}else{
				throw new TabellaException('You did not pass a valid target element to the constructor');
			}		

		}catch(e){
			console.error(e.toString());
			return e;
		}

		