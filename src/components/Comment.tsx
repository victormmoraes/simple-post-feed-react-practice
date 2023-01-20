import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1 
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/victormmoraes.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Medrado</strong>
                            <time title="24 de outubro às 09:00h" dateTime="2022-10-24 09:00:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}