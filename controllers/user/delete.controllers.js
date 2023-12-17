const del = (req, res) => {
    const { id } = req.params;
    res.send(`CONTROLLER / USER / DELETE ${id}`);
}

export default del;