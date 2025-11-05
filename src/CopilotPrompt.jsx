export default function ({target}) {
    return <><span>{target.name} is {target.gender ?? "of unknown gender"} with {target.skin ?? "normal"} skin, {target.hair ?? "crazy"} hair and primarily wears {target?.costume?.color ?? "black"}.</span>
        {target.stats?.powers?.length > 0 && <span>{target.name} has the following powers: {target.stats?.powers?.join(", ")}.</span>}
        {target.backstory && <span>And this is {target.name}'s backstory: {target.backstory}</span>}
    </>
}