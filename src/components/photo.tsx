interface PhotoType {
    children: React.ReactNode;
}

const PhotoContainer = ({
    children
}: PhotoType) => {
    return (
        <div className="w-[312px] h-[427px] border-[10px] border-[white] rounded-[140px] overflow-hidden">
            <div className="h-full">
                {children}
            </div>
        </div>
    )
}

export default PhotoContainer;