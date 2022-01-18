import React from "react"
import { githubEdit } from "./githubedit.module.css"

const githubRepoUrl = "https://github.com/webgrower/gatsby/blob/master/content"

const GithubEdit = ({ url }) => {
  const editUrl = `${githubRepoUrl}${url}.md`

  return (
    <div className={githubEdit}>
      <a href={editUrl}>Эту страницу можно улучшить на Github</a>
    </div>
  )
}

export default GithubEdit
