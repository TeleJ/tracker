<div>
	<div className={classes.ButtonContainer}>
		<AddAnime className={classes.Button} />
	</div>
	<div className={classes.Container}>
		<h1 className={classes.Title}>Animes</h1>
		<ol start="1">
			{this.props.animes.map((anime) => (
				<Anime
					key={anime.id}
					anime={anime}
					clicked={() => this.props.onDelete(anime.id)}
				/>
			))}
		</ol>
	</div>
</div>;
