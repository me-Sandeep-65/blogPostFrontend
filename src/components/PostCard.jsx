import React from 'react'
import CardContainer from './CardContiner'

const PostCard = ({ PostActionButton, Post, PostBottomButton, height }, ...otherProps) => {
  return (
    <CardContainer tailwindClasses={`${height ? height : 'h-80'} w-80 rounded-md border py-3 m-3 bg-white dark:bg-gray-800 flex flex-col items-center justify-between`}>
        <div className="h-1/5 w-full px-4 flex justify-start items-center border-b">
            <img className="inline-block size-10 rounded-full ring-2 ring-white" src= {Post.userId.image ? Post.userId.image : "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} alt="profile" />
            <h1 className="text-xl w-full px-3 overflow-hidden whitespace-nowrap text-ellipsis">{Post.userId.name}</h1>
            <div className='flex flex-row'>
              {PostActionButton.map((Btn, index) => (
                <Btn userId={Post.userId._id} postId={Post._id} key={index} /> // Renders each button component dynamically
              ))}
            </div>
        </div>
        <div className="h-3/5 py-3 w-full px-4">
            <h1 className="text-xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{Post.title} </h1>
            <p className="line-clamp-6 text-ellipsis overflow-hidden text-justify">
                {Post.content}
            </p>
        </div>
        <div className='flex flex-row w-full justify-around'>
          {PostBottomButton?.map((Btn, index) => (
            <Btn userId={Post.userId._id} postId={Post._id} key={index} /> // Renders each button component dynamically
          ))}
        </div>
    </CardContainer>
  )
}

export default PostCard