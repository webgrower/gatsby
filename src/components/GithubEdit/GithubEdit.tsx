import React from 'react';
import styles from './githubedit.module.css';

const githubRepoUrl = 'https://github.com/webgrower/gatsby/blob/master/content';

const GithubEdit = ({ url }) => {
  const editUrl = `${githubRepoUrl}${url}.md`;

  return (
    <div className={styles.githubEdit}><a href={editUrl}>Эту страницу можно улучшить на Github</a></div>
  )
}

export default GithubEdit;
