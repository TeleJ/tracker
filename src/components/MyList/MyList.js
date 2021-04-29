import React, { Component } from 'react';
import { connect, useStore } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import classes from './MyList.module.css';
import AddAnime from '../AddAnime/AddAnime';
import Anime from '../Anime/Anime';
import * as actionCreators from '../../Store/actions/Actions';

class MyList extends Component {
	state = {
		canDelete: false,
	};

	render() {
		const handleOnDragEnd = (result) => {
			if (!result.destination) return;
			const items = Array.from(this.props.animes);
			const [reorderedList] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, reorderedList);
			this.props.onOrder(items);
		};

		return (
			<div>
				<div className={classes.ButtonContainer}>
					<AddAnime className={classes.Button} />
				</div>
				<div className={classes.Container}>
					<h1 className={classes.Title}>Animes</h1>
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<Droppable droppableId="droppable">
							{(provided) => (
								<ol
									start="1"
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{this.props.animes.map((anime, index) => {
										return (
											<Draggable
												key={anime.id}
												draggableId={anime.id}
												index={index}
											>
												{(provided) => (
													<div
														className={classes.ListItem}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
													>
														<Anime
															anime={anime}
															clicked={() => this.props.onDelete(anime.id)}
														/>
													</div>
												)}
											</Draggable>
										);
									})}
									{provided.placeholder}
								</ol>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		animes: state.animes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (anime) => dispatch(actionCreators.removeAnime(anime)),
		onOrder: (newList) => dispatch(actionCreators.orderList(newList)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
